export const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="feedback-form">{children}</div>
    </div>
  );
};
