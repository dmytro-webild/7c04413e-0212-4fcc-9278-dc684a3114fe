import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroOverlayProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  avatarsSrc?: string[];
  avatarsLabel?: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroOverlay = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  avatarsSrc,
  avatarsLabel,
  textAnimation,
}: HeroOverlayProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative w-full min-h-[90vh] lg:h-svh overflow-hidden flex flex-col justify-center mb-20"
    >
      <HeroBackgroundSlot />
      <ImageOrVideo
        imageSrc={imageSrc}
        videoSrc={videoSrc}
        className="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-content-width mx-auto py-16 md:py-24">
        <div className="flex flex-col gap-4 w-full md:w-6/10 lg:w-1/2 xl:w-[48%]">
          <div className="w-fit px-3.5 py-1.5 mb-1 text-sm rounded bg-white/10 backdrop-blur-md text-white border border-white/20">
            <p className="font-medium text-white">{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={false}
            tag="h1"
            className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-[1.15] font-bold text-white text-balance drop-shadow-md"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-white/90 leading-relaxed text-balance drop-shadow-sm"
          />

          <div className="flex flex-wrap gap-3 mt-3 md:mt-4">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>

          {avatarsSrc && avatarsSrc.length > 0 && (
            <div className="mt-3 md:mt-4">
              <AvatarGroup avatarsSrc={avatarsSrc} size="lg" label={avatarsLabel} labelClassName="text-white" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroOverlay;
