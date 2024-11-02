const WhyCard = ({title, description, IconComponent}) => {
  return (
    <div className="why-card">
      <span className="why-card__icon why-card__icon--folders icon">
        <IconComponent className="icon__svg" />
      </span>
      <div className="why-card__content">
        <h3 className="why-card__title">{title}</h3>
        <p className="why-card__desc">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
