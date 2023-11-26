import ClassCompo from "./ClassCompo";

export default function Abhay()
{
    return(
       <>
         <h1>Hello Functional Component</h1>
         <Nakum/>
         <ClassCompo/>
        
       </>
    )
}

function Nakum()
{
    const x=2;
    const y=20;


    return(
        <>
            <h1>Nakum</h1>
           <h2 style={{color:"red"}}> Sum = 
           {
            // "sum"+ (x+y)
            x+y

           
           }
           </h2>
        </>
    )
}

// export default Abhay;
// export default Nakum;