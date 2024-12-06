// components/Feature.tsx
interface FeatureProps {
  text: string;
}

export function Feature({ text }: FeatureProps) {
  return (
    <p className="text-base sm:text-xl flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-5 px-2">
      <i className="fas fa-check-circle text-[#FF9900] text-lg sm:text-xl"></i>
      <span className="text-left">{text}</span>
    </p>
  );
}