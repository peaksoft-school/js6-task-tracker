import styled from "styled-components"

function MemberBoard({ listProject }) {
   return (
      <GlobalBox>
         <Container>
            <span className="title-list">Involved in project</span>
            <span className="length-array">{listProject.length}</span>
         </Container>
         <BoardContainer>
            {listProject.map((item) => {
               return (
                  <Board id={item.id}>
                     <img src={item.boardIcon} alt="" />
                     <TitleBox>
                        <p>{item.titleBoard}</p>
                        <span>{item.discription}</span>
                     </TitleBox>
                  </Board>
               )
            })}
         </BoardContainer>
      </GlobalBox>
   )
}
export default MemberBoard
const GlobalBox = styled.div`
   width: 746px;
   height: 328px;
   position: absolute;
   margin-top: 32px;
`
const Container = styled.div`
   width: 200px;
   height: 20px;
   display: flex;
   padding: 0px 5px;
   gap: 6px;
   .title-list {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #111111;
   }
   .length-array {
      width: 19px;
      height: 18px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: #ffffff;
      background: #b2b2b2;
      border-radius: 18px;
   }
`
const BoardContainer = styled.div`
   height: 328px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   gap: 16px;
   margin-top: 16px;
`
const Board = styled.div`
   width: 230px;
   height: 66px;
   display: flex;
   border-radius: 10px;
   img {
      width: 68px;
      height: 68px;
      border-radius: 8px;
   }
`
const TitleBox = styled.div`
   width: 227px;
   height: 38px;
   line-height: 20px;
   padding: 12px;
   p {
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      color: #000000;
      margin: 0;
   }
   span {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #919191;
      margin: 0;
   }
`
