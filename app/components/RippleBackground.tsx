export default function RippleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <div className="ripple-circle" style={{ animationDelay: '0s' }} />
      <div className="ripple-circle" style={{ animationDelay: '1.3s' }} />
      <div className="ripple-circle" style={{ animationDelay: '2.6s' }} />
    </div>
  );
}
