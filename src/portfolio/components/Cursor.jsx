/* eslint-disable react/prop-types */
export default function Cursor({ cursorRef, ringRef }) {
  return (
    <>
      {/* Small dot */}
      <div ref={cursorRef} className="cursor" />
      {/* Bigger ring */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

