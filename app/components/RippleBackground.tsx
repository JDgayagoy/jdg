export default function RippleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="ripple-circle" style={{ animationDelay: '1.5s' }} />
      <div className="ripple-circle" style={{ animationDelay: '2.8s' }} />
      <div className="ripple-circle" style={{ animationDelay: '4.1s' }} />
    </div>
  );
}
