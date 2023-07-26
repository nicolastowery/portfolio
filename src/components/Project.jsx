function Project({
  title,
  tech,
  source,
  skills,
  demo,
  activeProject,
  onActiveProject,
  children,
}) {
  return (
    <li className="project">
      <h2
        style={{ cursor: "pointer" }}
        className="project__title"
        onClick={() => onActiveProject(title)}
      >
        {title}
      </h2>
      {activeProject === title && (
        <>
          {" "}
          <div className="tech">
            <h3 className="tech__title">Tehnology used:</h3>
            <ul className="tech__items">
              {tech.map((t, i) => {
                return (
                  <li className="tech__item" key={i}>
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="skill">
            <h3 className="skill__title">Skills Gained</h3>
            <ul className="skill__items">
              {skills.map((skill, i) => {
                return (
                  <li className="skill__item" key={i}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="project__source">
            Source Code:{" "}
            {source ? <a href={source}>GitHub</a> : "available upon request"}
          </div>
          {demo && (
            <div className="project__demo">
              {demo.map((d) => {
                return <a href={`${d.path}/text.html`}>{d.name}</a>;
              })}
            </div>
          )}
          <div className="project__content">{children}</div>
        </>
      )}
    </li>
  );
}

export default Project;
