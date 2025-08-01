export const Card = ({title,description, img,color}) => {
  return (
    <article className="shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] rounded-sm p-6 h-[222px] xl:max-w-[350px] relative overflow-hidden ">
      <div className={`${color} h-[3px] w-full absolute top-0 left-0`}></div>
        <h2 className="font-semibold text[1.25rem]">{title}</h2>
        <p className="text-Grey-400 text-[.8125rem] xl:text-[.875rem]">
            {description}
        </p>
        <img className="absolute bottom-[24px] right-[24px]" src={img} alt="icon" />
    </article>
  )
}
