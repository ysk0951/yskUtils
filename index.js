/**
 * 
 * @param String xmlString : Xml에 명시되어있는 전체 String을 백틱으로 감싼것
 * @param String pattern : Table네임이 필수적으로 가지고잇는 문자 패턴 (ex - TB_)
 * @returns 해당XML에서 사용된 테이블 전체목록이 중복제거되어서 도출됨
 */
function eTNameFromXML(xmlString,pattern){
  return [...new Set(xmlString.split(' ').filters((v)=>{
    return v.cotains(pattern)
  }))]
}

export default {
  eTNameFromXML
};