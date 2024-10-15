import css from './Controls.module.css';

export const Controls = ({ options, feedbackCount }) => {
  return (
    <div className={css.controls}>
      {options.map(option => (
        <button
          className={css['btn-control']}
          key={option}
          type="button"
          onClick={() => feedbackCount(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
