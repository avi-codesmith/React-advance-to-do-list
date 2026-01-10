export default function Input({ textArea, label, ref, ...props }) {
  return (
    <>
      <label>{label}</label>
      {textArea ? (
        <textarea ref={ref} {...props}></textarea>
      ) : (
        <input ref={ref} {...props} />
      )}
    </>
  );
}
