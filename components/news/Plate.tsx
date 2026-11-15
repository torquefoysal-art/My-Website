export function Plate({ plate, kicker }: { plate: string; kicker: string }) {
  return (
    <div className={`plate plate-${plate}`} aria-hidden="true">
      <span>{kicker}</span>
    </div>
  );
}
