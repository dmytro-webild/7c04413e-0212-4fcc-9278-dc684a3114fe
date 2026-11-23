import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import AvatarGroup from "@/components/ui/AvatarGroup";
import Laptop3DMockup from "@/components/ui/Laptop3DMockup";

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
      className="relative w-full min-h-[90vh] lg:min-h-svh overflow-hidden flex flex-col justify-center mb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
    >
      <HeroBackgroundSlot />

      {/* Radial Blue Ambient Lighting Backdrops */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/25 via-blue-900/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-content-width mx-auto py-12 md:py-20 flex flex-col items-center text-center">
        {/* 3D Computer Banner Mockup positioned at the very top of the header section */}
        <div className="w-full flex justify-center mb-6 md:mb-10">
          <Laptop3DMockup imageSrc={imageSrc} videoSrc={videoSrc} />
        </div>

        {/* Hero Text & Actions Content */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <div className="w-fit px-3.5 py-1.5 mb-1 text-sm rounded bg-blue-500/15 backdrop-blur-md text-blue-200 border border-blue-400/20 shadow-sm">
            <p className="font-medium text-blue-200 text-center">{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={false}
            tag="h1"
            className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-[1.15] font-bold text-white text-center text-balance drop-shadow-md"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-slate-200 leading-relaxed text-center text-balance drop-shadow-sm"
          />

          <div className="flex flex-wrap gap-3 mt-3 md:mt-4 justify-center">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>

          {avatarsSrc && avatarsSrc.length > 0 && (
            <div className="mt-3 md:mt-4 text-center">
              <AvatarGroup avatarsSrc={avatarsSrc} size="lg" label={avatarsLabel} labelClassName="text-white" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroOverlay;
