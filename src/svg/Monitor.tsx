export default function Monitor() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFA07A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-monitor"
    >
      {/* <!-- Monitor Body --> */}
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="#FF7F50" />

      {/* <!-- Camera --> */}
      <circle cx="12" cy="4.5" r="0.7" fill="#FF4500" />

      {/* <!-- Buttons --> */}
      <circle cx="16" cy="16" r="0.8" fill="#CD5C5C" />
      <circle cx="18" cy="16" r="0.8" fill="#CD5C5C" />
      <circle cx="20" cy="16" r="0.8" fill="#CD5C5C" />

      {/* <!-- Stand --> */}
      <path d="M8 21h8" stroke="#CD5C5C" />
      <path d="M12 17v4" stroke="#FF4500" />
    </svg>
  );
}
