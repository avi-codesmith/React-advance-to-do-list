export default function Input({ textArea, label, ...props }) {
  return (
    <>
      <label>{label}</label>
      {textArea ? <textarea {...props}></textarea> : <input {...props} />}
    </>
  );
}
