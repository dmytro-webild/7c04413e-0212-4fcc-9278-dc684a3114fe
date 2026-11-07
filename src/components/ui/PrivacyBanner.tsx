import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings, Shield, X, Info } from "lucide-react";
import Button from "@/components/ui/Button";

const PRIVACY_STORAGE_KEY = "monix_privacy_accepted";
const PRIVACY_PREFS_KEY = "monix_privacy_preferences";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    try {
      const isAccepted = localStorage.getItem(PRIVACY_STORAGE_KEY);
      const savedPrefs = localStorage.getItem(PRIVACY_PREFS_KEY);

      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }

      if (!isAccepted) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      setIsVisible(true);
      setIsConfigOpen(true);
    };

    window.addEventListener("open-cookie-config", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-config", handleOpenSettings);
  }, []);

  const savePreferences = (newPrefs: CookiePreferences) => {
    try {
      localStorage.setItem(PRIVACY_STORAGE_KEY, "true");
      localStorage.setItem(PRIVACY_PREFS_KEY, JSON.stringify(newPrefs));
    } catch {
      // Ignore storage access errors
    }
    setPreferences(newPrefs);
    setIsConfigOpen(false);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveSelection = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof Omit<CookiePreferences, "necessary">) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !isConfigOpen && (
          <motion.aside
            aria-label="Aviso y configuración de cookies"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl"
          >
            <div className="w-content-width mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start gap-3 max-w-3xl">
                <Shield className="size-5 text-primary-cta shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento del sitio web, analizar el tráfico y personalizar la experiencia del usuario. Puede{" "}
                  <strong>aceptar todas</strong> las cookies, <strong>rechazar</strong> las opcionales o{" "}
                  <button
                    type="button"
                    onClick={() => setIsConfigOpen(true)}
                    className="underline text-primary-cta font-medium hover:opacity-80 cursor-pointer inline"
                  >
                    configurar cookies
                  </button>{" "}
                  según sus preferencias. Más información en nuestra{" "}
                  <a href="/politica-de-cookies" className="underline font-medium hover:opacity-80">
                    Política de Cookies
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsConfigOpen(true)}
                  className="flex items-center gap-1.5 h-10 px-4 text-sm font-medium rounded border border-border text-foreground bg-background/50 hover:bg-background transition-colors cursor-pointer"
                >
                  <Settings className="size-4 text-foreground/70" />
                  Configurar cookies
                </button>
                <Button
                  text="Rechazar"
                  variant="secondary"
                  onClick={handleRejectAll}
                  animate={false}
                />
                <Button
                  text="Aceptar todas"
                  variant="primary"
                  onClick={handleAcceptAll}
                  animate={false}
                />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Preference Configuration Modal */}
      <AnimatePresence>
        {isConfigOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConfigOpen(false)}
            />

            <motion.div
              className="relative w-full max-w-2xl bg-card border border-border rounded-lg shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <Shield className="size-5 text-primary-cta" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Configuración de cookies
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsConfigOpen(false)}
                  className="p-2 text-foreground/60 hover:text-foreground rounded-full hover:bg-background/80 transition-colors cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 my-4 leading-relaxed">
                Le permitimos personalizar las cookies que se instalarán durante su navegación en MonixAgency.
                Las cookies estrictamente necesarias garantizan la seguridad y el funcionamiento del sitio y no se pueden desactivar.
              </p>

              {/* Categories */}
              <div className="space-y-4 my-6">
                {/* Technical / Necessary */}
                <div className="p-4 rounded-lg bg-background/40 border border-border flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground text-base">
                        Cookies técnicas y necesarias
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-primary-cta/10 text-primary-cta font-medium">
                        Obligatorias
                      </span>
                    </div>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      Imprescindibles para el correcto funcionamiento, navegación y estabilidad del sitio web. No almacenan información personal identificable.
                    </p>
                  </div>
                  <div className="flex items-center shrink-0">
                    <span className="text-xs font-medium text-foreground/60 bg-background px-3 py-1 rounded border border-border">
                      Siempre activas
                    </span>
                  </div>
                </div>

                {/* Analytics */}
                <div className="p-4 rounded-lg bg-background/40 border border-border flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-medium text-foreground text-base">
                      Cookies analíticas y de medición
                    </span>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      Nos ayudan a comprender cómo interactúan los usuarios con el sitio web mediante el análisis anónimo de tráfico para mejorar los contenidos y servicios.
                    </p>
                  </div>
                  <div className="flex items-center shrink-0">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.analytics}
                      onClick={() => togglePreference("analytics")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        preferences.analytics ? "bg-primary-cta" : "bg-foreground/20"
                      }`}
                    >
                      <span
                        className={`inline-block size-4 rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing */}
                <div className="p-4 rounded-lg bg-background/40 border border-border flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-medium text-foreground text-base">
                      Cookies de publicidad y marketing
                    </span>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      Permiten la gestión de contenidos y anuncios publicitarios de acuerdo con el perfil de navegación e intereses del usuario.
                    </p>
                  </div>
                  <div className="flex items-center shrink-0">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.marketing}
                      onClick={() => togglePreference("marketing")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        preferences.marketing ? "bg-primary-cta" : "bg-foreground/20"
                      }`}
                    >
                      <span
                        className={`inline-block size-4 rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="flex items-start gap-2 text-xs text-foreground/60 mb-6 bg-background/30 p-3 rounded border border-border/60">
                <Info className="size-4 shrink-0 mt-0.5 text-primary-cta/80" />
                <span>
                  Para más detalle sobre las cookies utilizadas y los derechos de protección de datos, visite la{" "}
                  <a href="/politica-de-cookies" className="underline hover:text-foreground">
                    Política de Cookies
                  </a>
                  .
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-border">
                <Button
                  text="Rechazar opcionales"
                  variant="secondary"
                  onClick={handleRejectAll}
                  animate={false}
                  className="w-full sm:w-auto"
                />
                <Button
                  text="Guardar selección"
                  variant="secondary"
                  onClick={handleSaveSelection}
                  animate={false}
                  className="w-full sm:w-auto"
                />
                <Button
                  text="Aceptar todas"
                  variant="primary"
                  onClick={handleAcceptAll}
                  animate={false}
                  className="w-full sm:w-auto"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
