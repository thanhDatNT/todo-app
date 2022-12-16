import styles from '../styles/Home.module.css'
import Layout from "../components/_core/layout";
import { Col, Row } from 'antd';
import TodoContainer from "../components/containers/todo-container/todo.container";
import ContentContainer from "../components/containers/content-container/content.container";

export default function Home() {
  return (
    <Layout title="To-do App">

      <div className={styles.controlContainer}>
          <Row className={styles.maxHeight}>
              <Col xs={24} sm={8} md={8} lg={6} xl={6}>
                  <TodoContainer/>
              </Col>
              <Col sm={16} md={16} lg={18} xl={18}>
                  <ContentContainer/>
              </Col>
              {/*<Col span={8}></Col>*/}
              {/*<Col span={16}></Col>*/}
          </Row>
      </div>
    </Layout>
  )
}
