const WhyCard = ({title, description, IconComponent}) => {
  return (
    <div class="why-card">
      <span class="why-card__icon why-card__icon--folders icon">
        <IconComponent class="icon__svg" />
      </span>
      <div class="why-card__content">
        <h3 class="why-card__title">{title}</h3>
        <p class="why-card__desc">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
