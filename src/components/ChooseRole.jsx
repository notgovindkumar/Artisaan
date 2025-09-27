export default function ChooseRole({ onSelect }) {
  return (
    <section className="role-split">
      <div className="role buyer" onClick={()=>onSelect("Buyer")}>Buyer</div>
      <div className="role artisan" onClick={()=>onSelect("Artisan")}>Artisan</div>
    </section>
  );
}
