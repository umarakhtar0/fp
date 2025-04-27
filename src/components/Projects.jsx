import './ProjectCard.scss';

const ProjectCard = ({ title, languages = [], image, link }) => {
  if (!title || !image || !link) {
    return null; // ⛔ If important data missing, don't render broken card
  }

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h3>{title}</h3>

          {/* Languages List */}
          {languages.length > 0 && (
            <p className="languages-list">
              {languages.join(", ")}
            </p>
          )}
        </div>

        <div className="card-back">
          <img src={image} alt={`${title} screenshot`} />

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
