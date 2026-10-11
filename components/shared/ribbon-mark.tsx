export default function RibbonMark() {
  return (
    <svg viewBox="0 0 300 320" role="img" aria-label="Online Dream Tech creative emblem" className="ribbon-mark">
      <defs>
        <linearGradient id="ribbon" x1=".1" y1=".1" x2=".9" y2=".9">
          <stop stopColor="#b7ff65" /><stop offset=".25" stopColor="#27d9ff" />
          <stop offset=".52" stopColor="#b5a2ff" /><stop offset=".74" stopColor="#4beaff" />
          <stop offset="1" stopColor="#fff081" />
        </linearGradient>
        <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" stopOpacity=".92"/><stop offset=".42" stopColor="#fff" stopOpacity="0"/><stop offset=".78" stopColor="#fff" stopOpacity=".8"/><stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M164 253C91 253 59 195 68 120 76 52 124 20 176 28c53 8 75 53 63 91-8 25-27 38-57 43-24 4-43-4-45-21-2-15 11-25 31-29 18-4 27-13 27-26 0-17-17-31-40-31-36 0-63 31-65 76-3 51 17 90 54 102 18 6 37 4 51-4-2-15-11-27-27-38-19-13-33-23-39-34" fill="none" stroke="url(#ribbon)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M164 253C91 253 59 195 68 120 76 52 124 20 176 28c53 8 75 53 63 91-8 25-27 38-57 43-24 4-43-4-45-21-2-15 11-25 31-29 18-4 27-13 27-26 0-17-17-31-40-31-36 0-63 31-65 76-3 51 17 90 54 102 18 6 37 4 51-4-2-15-11-27-27-38-19-13-33-23-39-34" fill="none" stroke="url(#shine)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M190 245c25-8 48-27 61-53 8-17 2-34-14-47-13-10-27-16-43-18" fill="none" stroke="url(#ribbon)" strokeWidth="15" strokeLinecap="round"/>
      <path d="M190 245c25-8 48-27 61-53 8-17 2-34-14-47-13-10-27-16-43-18" fill="none" stroke="url(#shine)" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
}