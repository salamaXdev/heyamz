// components/Feature.tsx
interface FeatureProps {
    text: string;
  }
  
  export function Feature({ text }: FeatureProps) {
    return (
      <p className="text-xl flex items-center justify-center gap-3 my-5">
        <i className="fas fa-check-circle text-[#FF9900]"></i>
        {text}
      </p>
    );
  }
  