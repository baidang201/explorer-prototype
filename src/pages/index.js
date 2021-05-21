import * as React from "react"
import { Input, Button } from 'antd';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import { createPage, navigate } from "gatsby"

import RealtimeTxs from './realtime-txs'
import RealtimeBlocks from './realtime-blocks'
import Search from './search'



const { Header, Footer, Sider, Content } = Layout;


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const mainContent = {
  width: "800px",
  height: "800px",
  border: "1px solid #c3c3c3",
  display: "flex",
  "flexWrap": "wrap",
  "alignContent": "flex-start",
}

const menu = (
  <Menu>
    <Menu.Item >生态1浏览器</Menu.Item>
    <Menu.Item >生态2浏览器</Menu.Item>
    <Menu.Item >生态3浏览器</Menu.Item>
  </Menu>
);

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
    <Layout>
      <title>Home Page</title>
      

      <Content>
      

      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        切换网络 <DownOutlined />
        </a>
    </Dropdown>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

      
        <Search/>
        <div>最终区块：9999， 交易总数： 9999， 账户总数：9999 </div>

        <div style={mainContent}>
            <Col span={11}> <RealtimeBlocks/></Col>
            <Col span={11}> <RealtimeTxs/></Col>
        </div>
       </Content>
    </Layout>
    </main>
  )
}

export default IndexPage
