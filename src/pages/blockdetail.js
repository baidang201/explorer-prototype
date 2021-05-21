import * as React from "react"
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import { useStaticQuery, graphql } from "gatsby"

export default function BlockDetail() {
  const [blocknumber, setBlocknumber] = useQueryParam("blocknumber", StringParam);
  console.log("####blocknumber params: ", blocknumber)

    // const { loading, error, data } = useQuery(query, {
    // variables: { blocknumber: blocknumber },
    //     });
    // console.log("##### data", data)


  //const { loading, error, data } = useQuery(EXCHANGE_RATES);

  //高度，交易数 时间 
    //通过高度查询
    const data = useStaticQuery(graphql`
    query blockdetail {
        swapi {
            blocks(filter: {number: {equalTo: "1"}}) {
            nodes {
                id
                number
                parentHash
                timestamp
                extrinsics {
                    nodes {
                        method
                        args
                        timestamp
                    }
                }
            }
            }
        }
        }
    `)

    //通过hash查询
    // const data = useStaticQuery(graphql`
    // query blockdetail {
    //     swapi {
    //         block(
    //  id: "0x001a41eddf358e72da65577bf4c3d1ad0d5625fd8309f26288aa194046020765"
    //)  {
    //             id
    //             number
    //             parentHash
    //             timestamp
    //             extrinsics {
    //                 nodes {
    //                     method
    //                     args
    //                     timestamp
    //                 }
    //             }
    //         }
    //         }
    //     
    //     }
    // `)
  //console.log("####data is ####", data, JSON.stringify(data));
    let newData = data.swapi.blocks.nodes[0];
  
    let stringList = []
    newData.extrinsics.nodes.forEach(item => {
        stringList.push(item.method.concat("\t\t\t\t\t\t    ", item.args, "\t\t\t\t\t\t    ", item.timestamp, "\n") )
    });

    let extrinsicsString = stringList.join()

  return <div>Block detail <br/>
  <br/>
    Height:      &nbsp;   {newData.number}<br/>
    Block Hash:  &nbsp;   {newData.id}<br/>
    Parent Hash: &nbsp;   {newData.parentHash}<br/>
    Block Time:  &nbsp;   {newData.timestamp}<br/>
<br/>
    extrinsics 列表<br/>
    方法   &nbsp;  参数    &nbsp;   时间戳<br/>
    {extrinsicsString}
  </div>
}