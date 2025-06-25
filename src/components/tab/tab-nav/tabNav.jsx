

export default function TabNav({selectedLink}) {
 
    const tabList = ['Simple Bookmarking','Speedy Searching','Easy Sharing']

    return (
        <nav>
           {
            tabList.map((item, index) => <li key={index} onClick={() => selectedLink(index)} >{item}</li>)
           }
        </nav>
    )
}