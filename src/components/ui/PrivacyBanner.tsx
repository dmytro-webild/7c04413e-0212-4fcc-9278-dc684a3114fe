import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button";

const PRIVACY_STORAGE_KEY = "monix_privacy_accepted";

export default function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    try {
      const isAccepted = localStorage.getItem(PRIVACY_STORAGE_KEY);
      if (!isAccepted) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(PRIVACY_STORAGE_KEY, "true");
    } catch {
      // Ignore storage access errors
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Aviso de privacidad"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl"
        >
          <div className="w-content-width mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-foreground/90 max-w-3xl leading-relaxed">
              Utilizamos cookies y tecnologías necesarias para garantizar el correcto funcionamiento de nuestra web. Consulta nuestra política de cookies para más información.
            </p>
            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto justify-end">
              <Button
                text="Más información"
                variant="secondary"
                href="/politica-de-cookies"
                animate={false}
              />
              <Button
                text="Aceptar"
                variant="primary"
                onClick={handleAccept}
                animate={false}
              />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
