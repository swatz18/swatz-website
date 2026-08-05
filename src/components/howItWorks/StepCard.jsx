export default function StepCard({

    icon: Icon,
    title,
    description,
    index,
    visible

}){

    return(

        <article
            className={`step-card ${visible ? "visible" : ""}`}
            style={{
                transitionDelay: `${index * 0.45}s`
            }}
        >

            <div className="icon-circle">

                <Icon size={34} strokeWidth={1.8}/>

            </div>

            <h3>

                {title}

            </h3>

            <p>

                {description}

            </p>

        </article>

    )

}