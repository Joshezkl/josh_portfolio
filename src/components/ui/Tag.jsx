export default function Tag({ children, variant = "brand" }) {
  const classes =
    variant === "accent" ? "tag-pill-accent" : "tag-pill";
  return <span className={classes}>{children}</span>;
}
