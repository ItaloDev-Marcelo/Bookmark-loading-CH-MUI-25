

export default function TabNav({selectedLink, tabValue}) {
 
    const tabList = ['Simple Bookmarking','Speedy Searching','Easy Sharing']

    

    return (
        <nav className="tab-bar">
          <ul>
             {
            tabList.map((item, index) => <li key={index}   
            className={tabValue === index ? 'tab active my-2  lg:my-0 lg:mx-2 cursor-pointer' : 'tab my-2 cursor-pointer  lg:my-0 lg:mx-2' } onClick={() => selectedLink(index)} >{item}</li>)
           }
          </ul>
        </nav>
    )
}