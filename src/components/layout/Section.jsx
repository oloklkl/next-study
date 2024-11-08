function Section({title, desc, children}) {
    // console.log(props);


    // const props = {
    //     title: "섹션1",
    //     desc: "설명1";
        // children: <ul></ul>
    // };

    
    // 객체 분해 할당
    // const {title, desc, children} = props; 


  return (
    <div className="inner">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>{children}</div>
    </div>
  );
  }

  export default Section;