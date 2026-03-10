/**
 * Renders a price string. If the price contains two amounts (e.g. "₦850,000 ₦425,000"),
 * the first is shown with a strikethrough and the second is the current price.
 */
const PriceDisplay = ({ price, className = "" }: { price: string; className?: string }) => {
  const parts = price.split(" ");

  if (parts.length === 2) {
    return (
      <span className={className}>
        <span className="line-through text-muted-foreground opacity-60 mr-1.5">{parts[0]}</span>
        <span className="text-primary">{parts[1]}</span>
      </span>
    );
  }

  return <span className={className}>{price}</span>;
};

export default PriceDisplay;
