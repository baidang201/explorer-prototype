import * as React from "react"
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import { useStaticQuery, graphql } from "gatsby"

export default function TxDetail() {

    const [blocknumber, setBlocknumber] = useQueryParam("blocknumber", StringParam);
    console.log("####blocknumber params: ", blocknumber)

    const data = useStaticQuery(graphql`
    query txdetail {
        swapi {
        extrinsic(
        id: "0x001a41eddf358e72da65577bf4c3d1ad0d5625fd8309f26288aa194046020765"
        ) {
        id
        isSuccess
        method
        timestamp
        args
        block {
            number
        }
        }
    }
    }
    `)

   let newData = data.swapi.extrinsic;
   console.log("#### newData.isSuccess", newData.isSuccess);

  return <div>tx detail
      <br/>
      <br/>
        TxHash: &nbsp;  {newData.id}  <br/>
        Status:&nbsp;   {newData.isSuccess === true? "true": "false"} <br/>
        Height:&nbsp;   {newData.block.number} <br/>
        method:&nbsp;   {newData.method}  <br/>
        Time:&nbsp;     {newData.timestamp}  <br/>

        args:&nbsp;     { JSON.stringify(newData.args)} <br/>
      </div>
}