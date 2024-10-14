export const Controls = ({ options, feedbackCount }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => feedbackCount(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
