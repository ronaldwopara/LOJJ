type PhoneMockupProps = {
  image: string;
  alt: string;
};

export default function PhoneMockup({ image, alt }: PhoneMockupProps) {
  return (
    <div className="teammates-phone-wrap" aria-hidden>
      <div className="phone-frame">
        <div className="phone-notch" />
        <img src={image} alt={alt} className="phone-screen" />
      </div>
    </div>
  );
}
