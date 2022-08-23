import search from '../assets/img/search.svg'

// import Table from '../components/Table';
import './table.scss'

const list = [
  {id:1,data:'pesquisa a',type:'a',description:'alguma coisa',content:'https://www.arcgis.com/index.html'},
  {id:2,data:'pesquisa b',type:'d',description:'alguma coisa',content:'https://www.arcgis.com/index.html'},
  {id:3,data:'pesquisa c',type:'e',description:'alguma coisa',content:'https://www.arcgis.com/index.html'},
]

const colNames =['Pesquisa','Categoria','Descrição','Conteúdo']
const Arcgis = () => {


  return <div className='container'>
    <div>
    </div>
    <section>
      <div className='header-container'>
      </div>
      <div className='content-container'>
        <div className='tool-box'>
          <div> 
            <img src={search} alt="search"/>
            <input placeHolder="encontre uma pesquisa"> 
            </input>
          </div>
        </div>
        <div className='grid-data'>
          {/* <Table list={list} colNames={colNames}/> */}
          {list.length >0 &&(
            <table>
              <tr>
                  {colNames.map((headerItem, index)=>(
                      <th key={index}>
                          {headerItem}
                      </th>
                  ))}
              </tr>
              {/* {Object.values(list).map((obj,index) =>
              (
                  <tr key = {index}>
                      {Object.values(obj).map((value, index2)=>(
                          <td key={index2.data}>{value}</td>
                      ))}
                  </tr>
              ))} */}
              {list.map((itens)=>{
                const {data,type,description,content} = itens;
                return(
                  <tr>
                    <td>{data}</td>
                    <td>{type}</td>
                    <td>{description}</td>
                    <td><a href={content} target='_blank'>View</a></td>
                  </tr>
                )
              })}
            </table>
        )}
        </div>
      </div>
    </section>
      
  </div>
};

export default Arcgis;
