interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  variant?: "danger" | "success" | "neutral";
}

function MetricCard({
  title,
  value,
  description,
  variant = "neutral",
}: MetricCardProps) {
  return (
    <div className={`metric-card ${variant}`}>

      <span className="metric-title">
        {title}
      </span>

      <strong className="metric-value">
        {value}
      </strong>

      <span className="metric-description">
        {description}
      </span>

    </div>
  );
}

export default MetricCard;