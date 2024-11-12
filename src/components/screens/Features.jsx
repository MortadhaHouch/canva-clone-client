import { useContext } from 'react';
import { ThemeContext } from '../../providers/themeProvider';
import Image1 from "../../../public/SVGs/secure-profile.svg"
import Image2 from "../../../public/SVGs/Analytics-bro.svg"
import Image5 from "../../../public/SVGs/Craft beer manufacturing-cuate.svg"
import Image7 from "../../../public/SVGs/Download-rafiki.svg"
import Image8 from "../../../public/SVGs/Feedback-rafiki.svg"
import Image10 from "../../../public/SVGs/Inbox cleanup-rafiki.svg"
import Image12 from "../../../public/SVGs/Pen tool-rafiki.svg"
import Image13 from "../../../public/SVGs/Responsive-cuate.svg"
import Image15 from "../../../public/SVGs/Update-rafiki.svg"
import Image17 from "../../../public/SVGs/Responsive-amico.svg"
import Image18 from "../../../public/SVGs/Update-amico.svg"
import Image19 from "../../../public/SVGs/Creative thinking-amico.svg"
import Image20 from "../../../public/SVGs/Photo Sharing-bro.svg"
import Image21 from "../../../public/SVGs/At work-bro.svg"
import Image22 from "../../../public/SVGs/Advanced customization-amico.svg"
import Image23 from "../../../public/SVGs/Version control-bro.svg"
import Card from '../LayoutComponents/Card';
const features = [
  {
    icon:Image12,
    title: "Huge tool set",
  },{
    icon:Image7,
    title:"Excellent file management",
  },{
    icon:Image13,
    title:"Collaborative features",
  },{
    icons:Image8,
    title:"Feedback and support",
  },{
    icon:Image22,
    title:"Customizable design settings",
  },{
    icon:Image1,
    title:"Secure and private",
  },{
    icon:Image17,
    title:"Responsive design",
  },{
    icon:Image18,
    title:"Free updates and support",
  },{
    icon:Image19,
    title:"Stunning designs",
  },{
    icon:Image2,
    title:"High-quality results",
  },{
    icon:Image15,
    title:"Profile settings",
  },{
    icon:Image10,
    title:"File deletion",
  },{
    icon:Image20,
    title:"File sharing",
  },{
    icon:Image23,
    title:"File versioning",
  },{
    icon:Image21,
    title:"Real-time collaboration",
  },{
    icon:Image5,
    title:"Draft support",
  }
]
export default function Features() {
  const theme = useContext(ThemeContext);
  return (
      <main
          style={{
            backgroundColor: theme.isDark || JSON.parse(localStorage.getItem("isDark")) ? "#133E87" : "#E5D9F2"
          }}
          className="w-100 min-vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-5 main-page p-5 position-relative">
        {
          features.map((item, index) => {
            return (
                <Card item={item} key={index} index={index}/>
            )
          })
        }
      </main>
  )
}
