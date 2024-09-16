/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import HeroPanel from "../components/HeroPanel"
import { graphql } from "gatsby"
import SummaryPanel from "../components/SummaryPanel"


const SecondPage = ({ data, location }) => {

  return (
   <Layout>
    <div id="___gatsby">
      <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
        <div className="x__asset-page">
          <Topbar />
          <main className="x">
            <div
              className="x__asset-page__background-container x__asset-page__background"
            >


              <div
                aria-hidden="true"
                style={{ width: "100%", paddingBottom: "56.2429696287964%" }}
              />
              <img
                src="/images/header-bg-lsize.jpg"
                alt="Best Bitcoin Wallet | BTC Wallet App"
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: 1,
                  transition: "opacity 1600ms"
                }}
              />


            </div>
            <Header />
            {data?.allContentfulHeroPanel?.nodes?.map((node,index)=><HeroPanel data={node} key={index}/>)}

            <SummaryPanel nodes={data.allContentfulSummaryPanel.nodes}/>
            <section className="x__asset-page__summary x-active">
              <div className="x__asset-page__summary__content">
                <ul className="x__asset-page__summary__list">
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 113 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Send and Receive&lt;br /&gt; Bitcoin BTC</title>
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M83.3977 41.5435L38.0671 65.4888L42.1753 92.5998L83.3977 41.5435Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M90.3698 30.4341L42.1753 68.6483V92.5998L90.3698 30.4341Z"
                          fill="url(#gradient2)"
                        />
                        <g opacity="0.25" filter="url(#filter1)">
                          <path
                            d="M22.7063 54.3856L90.3698 30.4341C90.3698 30.4341 80.9909 37.8707 62.2331 52.7441L37.8541 65.4826L22.7063 54.3856Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          opacity="0.25"
                          d="M22.7063 54.3856L90.3698 30.4341C90.3698 30.4341 80.9909 37.8707 62.2331 52.7441L37.8541 65.4826L22.7063 54.3856Z"
                          fill="url(#gradient3)"
                        />
                        <path
                          d="M54.4614 58.9065L42.1753 68.6484L75.7229 93.2249C76.2775 93.6311 77.0018 93.7241 77.641 93.4711C78.2801 93.2181 78.7446 92.6545 78.8708 91.9788L81.394 78.4742L54.4614 58.9065Z"
                          fill="#FE9D39"
                        />
                        <path
                          d="M64.5708 50.8906L83.921 64.9493L81.394 78.4742L54.4614 58.9066L64.5708 50.8906Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M83.921 64.9493L64.5708 50.8905L90.3698 30.4341L83.921 64.9493Z"
                          fill="#FFC82D"
                        />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path
                            d="M83.921 64.9493L64.5708 50.8905L90.3698 30.4341L83.921 64.9493Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <g opacity="0.4">
                          <path
                            d="M104.169 26.4714L103.688 26.6412L103.355 25.6984L103.836 25.5286L104.169 26.4714Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M99.6994 28.0506L98.7382 28.3902L98.4051 27.4473L99.3663 27.1077L99.6994 28.0506Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M94.7493 29.7996L93.7881 30.1392L93.455 29.1963L94.4162 28.8567L94.7493 29.7996Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M89.7992 31.5485L88.838 31.8881L88.5049 30.9452L89.466 30.6056L89.7992 31.5485Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M84.8491 33.2975L83.8879 33.6371L83.5547 32.6942L84.5159 32.3546L84.8491 33.2975Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M79.8989 35.0464L78.9378 35.386L78.6046 34.4432L79.5658 34.1036L79.8989 35.0464Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M74.9488 36.7954L73.9876 37.135L73.6545 36.1921L74.6157 35.8525L74.9488 36.7954Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M69.9987 38.5444L69.0375 38.884L68.7044 37.9411L69.6656 37.6015L69.9987 38.5444Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M65.0486 40.2933L64.0874 40.6329L63.7543 39.69L64.7155 39.3504L65.0486 40.2933Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M60.0985 42.0423L59.1373 42.3819L58.8042 41.439L59.7654 41.0994L60.0985 42.0423Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M55.1484 43.7912L54.1872 44.1308L53.854 43.188L54.8152 42.8484L55.1484 43.7912Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M50.1983 45.5402L49.2371 45.8798L48.9039 44.9369L49.8651 44.5973L50.1983 45.5402Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M45.2481 47.2892L44.287 47.6288L43.9538 46.6859L44.915 46.3463L45.2481 47.2892Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M40.298 49.0381L39.3368 49.3777L39.0037 48.4348L39.9649 48.0952L40.298 49.0381Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M35.3479 50.7871L34.3867 51.1267L34.0536 50.1838L35.0148 49.8442L35.3479 50.7871Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.3978 52.536L29.4366 52.8756L29.1035 51.9328L30.0647 51.5932L30.3978 52.536Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M25.4477 54.285L24.4865 54.6246L24.1534 53.6817L25.1146 53.3421L25.4477 54.285Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M20.4976 56.034L19.5364 56.3736L19.2032 55.4307L20.1644 55.0911L20.4976 56.034Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M15.5475 57.7829L14.5863 58.1225L14.2531 57.1796L15.2143 56.84L15.5475 57.7829Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M10.5973 59.5319L9.63615 59.8715L9.30302 58.9286L10.2642 58.589L10.5973 59.5319Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M5.64722 61.2808L5.16663 61.4506L4.8335 60.5078L5.31409 60.338L5.64722 61.2808Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M9.0638 44.1356L8.65312 43.8279L9.25277 43.0276L9.66345 43.3353L9.0638 44.1356Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M13.2938 47.3051L12.4724 46.6897L13.0721 45.8894L13.8934 46.5049L13.2938 47.3051Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M17.5237 50.4747L16.7024 49.8593L17.302 49.059L18.1234 49.6745L17.5237 50.4747Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M21.7537 53.6443L20.9323 53.0288L21.532 52.2286L22.3533 52.844L21.7537 53.6443Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M25.9837 56.8139L25.1623 56.1984L25.762 55.3981L26.5833 56.0136L25.9837 56.8139Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.2136 59.9834L29.3923 59.368L29.9919 58.5677L30.8133 59.1832L30.2136 59.9834Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M34.4436 63.153L33.6222 62.5375L34.2219 61.7373L35.0432 62.3527L34.4436 63.153Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M38.2629 66.0148L37.8522 65.7071L38.4519 64.9068L38.8625 65.2146L38.2629 66.0148Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter1"
                            x="0.706299"
                            y="12.4341"
                            width="111.664"
                            height="79.0486"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={11} />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="gradient1"
                            x1="42.8657"
                            y1="41.5435"
                            x2="84.7402"
                            y2="88.2448"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="51.7895"
                            y1="30.4341"
                            x2="93.4943"
                            y2="83.7014"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="91.7231"
                            y1="52.7542"
                            x2="33.2242"
                            y2="22.7499"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>
                      Send and Receive
                      <br /> Bitcoin BTC
                    </h2>
                    <p>
                      Send and receive BTC easily with a Bitcoin BTC address or
                      scannable QR code. Learn how to send and receive in Exodus.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <i
                        className="x__asset-icon__wrapper"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "14%",
                          width: "39%",
                          height: "35%"
                        }}
                      >
                        <img
                          className="x__asset-icon x__asset-icon--100"
                          src="data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient x1='115.077%25' y1='77.227%25' x2='27.227%25' y2='34.923%25' id='a'%3e%3cstop stop-color='%23FE9D39' offset='0%25'/%3e%3cstop stop-color='%23FFC82D' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='m22 1.155 13.32 7.69a4 4 0 0 1 2 3.464v15.382a4 4 0 0 1-2 3.464L22 38.845a4 4 0 0 1-4 0l-13.32-7.69a4 4 0 0 1-2-3.464V12.309a4 4 0 0 1 2-3.464L18 1.155a4 4 0 0 1 4 0z' fill='url(%23a)'/%3e%3cpath d='M24.198 26.417c-1.176.425-2.267.264-2.752.2a16.982 16.982 0 0 1-1.074-.194l-.715 2.667-1.642-.44.703-2.624-1.25-.335-.703 2.624-1.642-.44.703-2.624-3.23-.866.866-1.882.982.264c.33.088.476.094.649.001.173-.094.257-.285.3-.446l1.82-6.794c.115-.426.111-.55-.026-.821-.137-.272-.59-.424-.849-.493l-.949-.255.457-1.704 3.23.865.705-2.632 1.642.44-.705 2.632 1.25.335.706-2.632 1.642.44-.714 2.664c1.204.404 2.053.881 2.69 1.682.825 1.035.418 2.34.31 2.649-.107.308-.407.877-.788 1.194-.381.318-1.161.528-1.161.528s.752.383 1.2.955c.446.572.662 1.427.346 2.51-.314 1.084-.827 2.106-2.001 2.532zm-3.408-5.7c-.799-.271-1.856-.497-1.856-.497l-.944 3.522s1.083.315 1.827.457c.743.141 1.544.159 1.976.052.43-.107.97-.308 1.186-1.113.216-.806-.23-1.287-.497-1.523-.265-.236-.893-.626-1.692-.897zm-.053-1.765c.605.137 1.279.17 1.807.04s.896-.46 1.041-1.062c.145-.602-.118-1.216-.738-1.604-.62-.388-1.068-.525-1.58-.67-.512-.145-1.046-.24-1.046-.24l-.85 3.17s.762.228 1.366.366z' fill='white'/%3e%3c/g%3e%3c/svg%3e"
                          alt="Bitcoin (BTC)"
                        />
                      </i>
                      <svg
                        viewBox="0 0 106 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Swap Bitcoin instantly from your wallet</title>
                        <path
                          opacity="0.25"
                          d="M58.3205 20.3093L84.9615 35.6905C87.4367 37.1196 88.9615 39.7606 88.9615 42.6187V58.6704C88.0656 58.5251 87.1316 58.6866 86.3208 59.1547L84.6313 60.1301V44.5414C84.6313 42.0405 83.2972 39.7296 81.1313 38.4792L57.8205 25.0207C55.6547 23.7702 52.9863 23.7702 50.8205 25.0207L27.5096 38.4792C25.3438 39.7296 24.0096 42.0405 24.0096 44.5414V71.4585C24.0096 73.9594 25.3438 76.2702 27.5096 77.5207L50.8205 90.9792C52.9863 92.2296 55.6547 92.2296 57.8205 90.9792L62.9285 88.0301V90.6143C62.9285 91.3565 63.2712 92.0499 63.845 92.501L58.3205 95.6905C55.8452 97.1196 52.7957 97.1196 50.3205 95.6905L23.6794 80.3093C21.2042 78.8803 19.6794 76.2393 19.6794 73.3811V42.6187C19.6794 39.7606 21.2042 37.1196 23.6794 35.6905L50.3205 20.3093C52.7957 18.8803 55.8452 18.8803 58.3205 20.3093Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.25"
                          d="M57.8111 25.0208L81.122 38.4794C83.2878 39.7298 84.622 42.0407 84.622 44.5416V60.1356L73.0002 66.8454C71.7626 67.5599 71.0002 68.8804 71.0002 70.3095V75.3398L64.1285 79.3072C63.3859 79.736 62.9285 80.5283 62.9285 81.3857V88.0249L57.8111 90.9794C55.6453 92.2298 52.9769 92.2298 50.8111 90.9794L27.5002 77.5208C25.3344 76.2704 24.0002 73.9595 24.0002 71.4587V44.5416C24.0002 42.0407 25.3344 39.7298 27.5002 38.4794L50.8111 25.0208C52.9769 23.7704 55.6453 23.7704 57.8111 25.0208Z"
                          fill="url(#gradient2)"
                        />
                        <g opacity="0.1">
                          <path
                            d="M66.1663 52.7012L55.946 46V49.7467L62.5024 54.0071L61.731 56.4478H55.946V59.5522H61.731L62.5024 61.9929L55.946 66.2533V70L66.1663 63.3202L64.495 58.0107L66.1663 52.7012Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M47.0541 59.5522H52.8177V56.4478H47.0326L46.2827 54.0071L52.8177 49.7467V46L42.5974 52.7012L44.2687 58.0107L42.5974 63.3202L52.8392 70V66.2533L46.2827 61.9929L47.0541 59.5522Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M59.4868 11.5602L59.0706 11.3199L59.5706 10.4539L59.9868 10.6942L59.4868 11.5602ZM63.6495 13.9635L62.8169 13.4829L63.3169 12.6168L64.1495 13.0975L63.6495 13.9635ZM67.8121 16.3668L66.9796 15.8862L67.4796 15.0202L68.3121 15.5008L67.8121 16.3668ZM71.9748 18.7702L71.1423 18.2895L71.6423 17.4235L72.4748 17.9041L71.9748 18.7702ZM76.1375 21.1735L75.3049 20.6928L75.8049 19.8268L76.6375 20.3074L76.1375 21.1735ZM80.3001 23.5768L79.4676 23.0961L79.9676 22.2301L80.8001 22.7107L80.3001 23.5768ZM84.4628 25.9801L83.6302 25.4994L84.1302 24.6334L84.9628 25.1141L84.4628 25.9801ZM88.6254 28.3834L87.7929 27.9027L88.2929 27.0367L89.1254 27.5174L88.6254 28.3834ZM92.3718 30.5464L91.9556 30.306L92.4556 29.44L92.8718 29.6804C93.0311 29.7723 93.1874 29.8681 93.3407 29.9676L92.7961 30.8063C92.6575 30.7163 92.516 30.6296 92.3718 30.5464ZM96.0864 34.4607C95.9358 34.1652 95.7698 33.8777 95.5892 33.5995L96.4279 33.0549C96.6275 33.3624 96.811 33.6801 96.9774 34.0067L96.0864 34.4607ZM97.1218 38.7736C97.1218 38.6071 97.1175 38.4413 97.1088 38.2762L98.1075 38.224C98.117 38.4064 98.1218 38.5897 98.1218 38.7736V39.2894H97.1218V38.7736ZM97.1218 43.4028H98.1218V44.4298H97.1218V43.4028ZM97.1218 48.5446H98.1218V49.5724H97.1218V48.5446ZM97.1218 53.6861H98.1218V54.7149H97.1218V53.6861ZM10.5193 57.548H11.5193V58.039H10.5193V57.548ZM97.1218 58.8277H98.1218V59.34L97.1218 59.3409V58.8277ZM10.5193 61.9741H11.5193V62.9585H10.5193V61.9741ZM10.5193 66.8944H11.5193V67.8778H10.5193V66.8944ZM10.5193 71.8149H11.5193V72.7975H10.5193V71.8149ZM10.5193 76.7331H11.5193V77.2266C11.5193 77.3931 11.5236 77.559 11.5323 77.7241L10.5336 77.7763C10.5241 77.5938 10.5193 77.4106 10.5193 77.2266V76.7331ZM12.2132 82.9453C12.0136 82.6379 11.8302 82.3202 11.6637 81.9936L12.5547 81.5395C12.7053 81.835 12.8713 82.1225 13.0519 82.4007L12.2132 82.9453ZM15.7693 86.3199C15.61 86.2279 15.4537 86.1321 15.3005 86.0326L15.845 85.1939C15.9836 85.2839 16.1251 85.3706 16.2693 85.4539L16.6856 85.6942L16.1856 86.5602L15.7693 86.3199ZM20.3482 88.9635L19.5157 88.4829L20.0157 87.6168L20.8482 88.0975L20.3482 88.9635ZM24.5109 91.3668L23.6783 90.8862L24.1783 90.0201L25.0109 90.5008L24.5109 91.3668ZM28.6735 93.7702L27.841 93.2895L28.341 92.4235L29.1735 92.9041L28.6735 93.7702ZM32.8362 96.1735L32.0037 95.6928L32.5037 94.8268L33.3362 95.3074L32.8362 96.1735ZM36.9988 98.5768L36.1663 98.0961L36.6663 97.2301L37.4988 97.7108L36.9988 98.5768ZM41.1615 100.98L40.329 100.499L40.829 99.6334L41.6615 100.114L41.1615 100.98ZM45.3242 103.383L44.4916 102.903L44.9916 102.037L45.8242 102.517L45.3242 103.383ZM49.0706 105.546L48.6543 105.306L49.1543 104.44L49.5706 104.68L49.0706 105.546Z"
                          fill="#FFFFFF"
                        />
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M53.7727 102.781L57.8517 109.716L49.806 109.652L53.7727 102.781Z"
                          fill="#FFFFFF"
                        />
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.7871 6L54.8208 13L50.8538 6L58.7871 6Z"
                          fill="#FFFFFF"
                        />
                        <path
                          opacity="0.5"
                          d="M90.3205 59.1548L103.641 66.8454C104.879 67.5599 105.641 68.8804 105.641 70.3095V85.6907C105.641 87.1198 104.879 88.4403 103.641 89.1548L90.3205 96.8454C89.0829 97.5599 87.5581 97.5599 86.3205 96.8454L73 89.1548C71.7624 88.4403 71 87.1198 71 85.6907V70.3095C71 68.8804 71.7624 67.5599 73 66.8454L86.3205 59.1548C87.5581 58.4403 89.0829 58.4403 90.3205 59.1548Z"
                          fill="url(#gradient3)"
                        />
                        <path
                          opacity="0.5"
                          d="M74.5205 74.6929L82.5128 79.3072C83.2554 79.736 83.7128 80.5283 83.7128 81.3857V90.6144C83.7128 91.4719 83.2554 92.2642 82.5128 92.6929L74.5205 97.3072C73.778 97.736 72.8631 97.736 72.1205 97.3072L64.1282 92.6929C63.3857 92.2642 62.9282 91.4719 62.9282 90.6144V81.3857C62.9282 80.5283 63.3857 79.736 64.1282 79.3072L72.1205 74.6929C72.8631 74.2642 73.778 74.2642 74.5205 74.6929Z"
                          fill="url(#gradient4)"
                        />
                        <path
                          opacity="0.5"
                          d="M74.5205 74.6929L82.5128 79.3072C83.2554 79.736 83.7128 80.5283 83.7128 81.3857V90.6144C83.7128 91.4719 83.2554 92.2642 82.5128 92.6929L74.5205 97.3072C73.778 97.736 72.8631 97.736 72.1205 97.3072L64.1282 92.6929C63.3857 92.2642 62.9282 91.4719 62.9282 90.6144V81.3857C62.9282 80.5283 63.3857 79.736 64.1282 79.3072L72.1205 74.6929C72.8631 74.2642 73.778 74.2642 74.5205 74.6929Z"
                          fill="url(#gradient5)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.0002 19.155L35.3202 26.845C35.9282 27.1961 36.4332 27.701 36.7843 28.3091C37.1353 28.9172 37.3202 29.6069 37.3202 30.309V45.691C37.3202 46.3932 37.1353 47.0829 36.7843 47.691C36.4332 48.299 35.9282 48.804 35.3202 49.155L22.0002 56.845C21.3921 57.1961 20.7023 57.3809 20.0002 57.3809C19.298 57.3809 18.6083 57.1961 18.0002 56.845L4.68018 49.155C4.07211 48.804 3.56717 48.299 3.2161 47.691C2.86503 47.0829 2.68019 46.3932 2.68018 45.691V30.309C2.68019 29.6069 2.86503 28.9172 3.2161 28.3091C3.56717 27.701 4.07211 27.1961 4.68018 26.845L18.0002 19.155C18.6083 18.804 19.298 18.6191 20.0002 18.6191C20.7023 18.6191 21.3921 18.804 22.0002 19.155Z"
                          fill="#FFC82D"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="26.6542"
                            y1="19.2375"
                            x2="105.634"
                            y2="106.493"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="24.0002"
                            y1="24.083"
                            x2="108.386"
                            y2="98.5394"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.5" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="95.9311"
                            y1="97.7689"
                            x2="77.9377"
                            y2="60.0822"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient4"
                            x1="77.8869"
                            y1="97.8613"
                            x2="67.0909"
                            y2="75.2493"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient5"
                            x1="77.8869"
                            y1="97.8613"
                            x2="67.0909"
                            y2="75.2493"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>Swap Bitcoin instantly from your wallet</h2>
                    <p>
                      Easily exchange Bitcoin for your favorite cryptos like
                      Ethereum, Monero, Litecoin, and more right from your wallet,
                      in seconds. No sign up required. Learn how to swap in Exodus.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 60 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Trezor Hardware Wallet Integration</title>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 105V68.7931V105C11.7584 94.6636 6.95783 88.5444 5.59842 86.6425C3.5593 83.7896 0 77.5862 0 68.7931L0 19C0 16.7909 1.79086 15 4 15H56C58.2091 15 60 16.7909 60 19V68.7931C60 77.5862 56.4407 83.7896 54.4016 86.6425C53.0422 88.5444 48.2416 94.6636 40 105H20Z"
                          fill="url(#gradient1)"
                        />
                        <g opacity="0.4">
                          <path
                            d="M30.5 64.4517V63.9396H29.5V64.4517H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 59.8428V58.8186H29.5V59.8428H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 54.7218V53.6976H29.5V54.7218H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 49.6008V48.5766H29.5V49.6008H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 44.4799V43.4557H29.5V44.4799H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 39.3589V38.3347H29.5V39.3589H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 34.2379V33.2137H29.5V34.2379H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 29.117V28.0928H29.5V29.117H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 23.996V22.9718H29.5V23.996H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 18.875V17.8508H29.5V18.875H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 13.754V12.7298H29.5V13.754H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 8.63307V7.60888H29.5V8.63307H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 3.5121V3H29.5V3.5121H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 117.452V116.915H29.5V117.452H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 112.625V111.552H29.5V112.625H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 107.262V106.19H29.5V107.262H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 101.899V100.827H29.5V101.899H30.5Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M30.5 96.5363V96H29.5V96.5363H30.5Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30 25V65H5C4.44772 65 4 64.5523 4 64V26C4 25.4477 4.44772 25 5 25H30Z"
                          fill="url(#gradient2)"
                        />
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M55 25C55.5523 25 56 25.4477 56 26V64C56 64.5523 55.5523 65 55 65H30V25H55Z"
                          fill="url(#gradient3)"
                        />
                        <path d="M10 52H40V55H10V52Z" fill="#FFC82D" />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path d="M10 52H40V55H10V52Z" fill="#FFFFFF" />
                        </g>
                        <path d="M10 43H50V46H10V43Z" fill="#FFC82D" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 34H50V37H10V34Z"
                          fill="#FE9D39"
                        />
                        <path
                          opacity="0.5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M34.2446 77.5296H36V87.1125H35.9879L30.0002 90L24.0121 87.1125H24V77.5296H25.7562V76.1843C25.7562 73.8773 27.6607 72 30.001 72C32.3402 72 34.2446 73.8773 34.2446 76.1843V77.5296ZM33.5851 85.5188V79.7782H26.4149V85.5188L30.0002 87.2436L33.5851 85.5188ZM27.9334 76.1843V77.5296H32.0675V76.1843C32.0675 75.1165 31.1398 74.2477 30.001 74.2477C28.861 74.2477 27.9334 75.1165 27.9334 76.1843Z"
                          fill="url(#gradient4)"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="43.8667"
                            y1="105.9"
                            x2="-6.72854"
                            y2="30.7512"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="22.7122"
                            y1="65.4"
                            x2="0.804294"
                            y2="32.026"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="48.7122"
                            y1="65.4"
                            x2="26.8043"
                            y2="32.026"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient4"
                            x1="27.3333"
                            y1={72}
                            x2="39.7599"
                            y2="90.4033"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.5" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>Trezor Hardware Wallet Integration</h2>
                    <p>
                      Combine the security of Trezor with the simplicity of Exodus
                      for the ultimate Bitcoin wallet experience.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 64 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <title>Private and Secure</title>
                        <path
                          opacity="0.25"
                          d="M32.0007 22.0002L32 96.9991C31.9994 96.9994 31.9988 96.9997 31.9983 97C10.6958 86.0713 0.0309728 71.0546 0.00389703 51.9482C-0.00129901 48.2815 -0.00129901 42.2694 0.00389703 33.9117L32.0007 22.0002Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.5"
                          d="M32 28L5.00329 38.0059C4.9989 45.0263 4.9989 50.0765 5.00329 53.1565C5.02613 69.2059 14.0246 81.8199 31.9985 91C49.9745 81.8213 58.9739 69.2068 58.9967 53.1565C59.0011 50.0765 59.0011 45.0263 58.9967 38.0059L32 28Z"
                          fill="url(#gradient2)"
                        />
                        <path
                          d="M53.8087 30.1194L31.9988 51.9293L31.9991 22L53.8087 30.1194Z"
                          fill="#FE9D39"
                        />
                        <path
                          d="M31.9985 78.9296L63.6974 47.2307L63.9984 47.5317L63.9982 48.2142L63.9952 33.9117L53.8087 30.1194L31.9988 51.9293L31.9985 78.9296Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M63.9984 47.5317L63.9951 51.9482C63.968 71.0554 53.3024 86.0725 31.9983 96.9995L31.9985 78.9296L63.6974 47.2307L63.9984 47.5317Z"
                          fill="#FFC82D"
                        />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path
                            d="M63.9984 47.5317L63.9951 51.9482C63.968 71.0554 53.3024 86.0725 31.9983 96.9995L31.9985 78.9296L63.6974 47.2307L63.9984 47.5317Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          d="M31.9983 90.9996L31.9989 28L58.9957 38.0058C59.0001 45.0263 59.0001 50.0765 58.9957 53.1565C58.9728 69.2065 49.9737 81.8209 31.9983 90.9996Z"
                          fill="url(#gradient3)"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M31.4993 5.5V5H32.4993V5.5H31.4993ZM31.4993 10.5V9.5H32.4993V10.5H31.4993ZM31.4993 15.5V14.5H32.4993V15.5H31.4993ZM31.4993 20.5V19.5H32.4993V20.5H31.4993ZM31.4993 25.5V24.5H32.4993V25.5H31.4993ZM31.4993 30.5V29.5H32.4993V30.5H31.4993ZM31.4993 35.5V34.5H32.4993V35.5H31.4993ZM31.4993 40.5V39.5H32.4993V40.5H31.4993ZM31.4993 45.5V44.5H32.4993V45.5H31.4993ZM31.4993 50.5V49.5H32.4993V50.5H31.4993ZM31.4993 55.5V54.5H32.4993V55.5H31.4993ZM31.4993 60.5V59.5H32.4993V60.5H31.4993ZM31.4993 65.5V64.5H32.4993V65.5H31.4993ZM31.4993 70.5V69.5H32.4993V70.5H31.4993ZM31.4993 75.5V74.5H32.4993V75.5H31.4993ZM31.4993 80.5V79.5H32.4993V80.5H31.4993ZM31.4993 85.5V84.5H32.4993V85.5H31.4993ZM31.4993 90.5V89.5H32.4993V90.5H31.4993ZM31.4993 95.5V94.5H32.4993V95.5H31.4993ZM31.4993 100.5V99.5H32.4993V100.5H31.4993ZM31.4993 105.5V104.5H32.4993V105.5H31.4993ZM31.4993 110.5V109.5H32.4993V110.5H31.4993ZM31.4993 115V114.5H32.4993V115H31.4993Z"
                          fill="#FFFFFF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.9969 69.451L21.2805 59.7346L24.5457 56.4695L31.0223 62.947L42.4514 51.519L45.6902 54.7578L30.9969 69.451Z"
                          fill="#FFFFFF"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="8.69831"
                            y1={22}
                            x2="66.4162"
                            y2="88.975"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="52.6302"
                            y1="91.63"
                            x2="5.11043"
                            y2="36.7338"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="31.999"
                            y1={28}
                            x2="31.999"
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopOpacity="0.15" />
                            <stop offset={1} stopColor="#FFFFFF" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>Private and Secure</h2>
                    <p>
                      Exodus encrypts private keys and transaction data. On your
                      device and for your eyes only. Your data remains private – no
                      account setup or verification required.
                    </p>
                  </li>
                  <li className="x__asset-page__summary__list-item">
                    <span
                      style={{
                        display: "block",
                        position: "relative",
                        width: "fit-content"
                      }}
                    >
                      <svg
                        viewBox="0 0 70 120"
                        fill="none"
                        style={{ display: "block", height: "100%", width: "100%" }}
                      >
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.4997 40.0591V37.5007C52.4933 31.7087 48.4683 26.8751 43.2119 26.3455L40.4676 20.3439C40.0778 19.7663 38.9897 19.9759 37.5133 20.5311L26.7094 24.7631C21.3608 27.176 17.7701 32.7695 17.4997 39.1071V40.0591C17.2069 39.8319 16.8999 39.7087 16.5912 39.7359C15.2787 39.8511 14.4308 42.4431 14.6996 45.5247C14.9621 48.5551 16.2094 50.9184 17.4997 50.8848V52.3408C17.4997 59.3424 24.7574 70.032 34.9997 70.032C45.2403 70.032 52.5012 59.3392 52.4997 52.3408V50.8848C53.7899 50.9184 55.034 48.5551 55.2981 45.5247C55.5669 42.4431 54.719 39.8511 53.4065 39.7359C53.0994 39.7087 52.7908 39.8319 52.4997 40.0591Z"
                          fill="url(#gradient1)"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M49.9079 41.7108C52.4988 41.7108 52.4988 39.6596 52.4988 39.6596V37.5012C52.494 31.7092 48.469 26.8756 43.2126 26.346L40.4683 20.3444C40.077 19.7668 38.9904 19.9764 37.514 20.5316L26.7101 24.7636C21.3615 27.1764 17.7692 32.7684 17.4988 39.1076V45.098C17.4988 45.098 21.212 39.7652 27.7076 39.498C34.2033 39.2308 35.6479 41.2036 41.4881 41.6836C43.8076 41.8756 47.4576 41.7108 49.9079 41.7108Z"
                          fill="url(#gradient2)"
                        />
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.9993 58.4001C26.9993 58.4001 27.6865 64.032 34.9997 64.032C42.313 64.032 42.9993 58.4001 42.9993 58.4001"
                          fill="url(#gradient3)"
                        />
                        <path
                          d="M38.4258 100.4L60.8354 77.9905L64.9984 79.5041C68.0259 80.7105 70.0098 83.6577 70.0002 86.9345V100.4H57.9994V88.4001L54.9994 100.4H38.4258Z"
                          fill="#FFC82D"
                        />
                        <g opacity="0.4" style={{ mixBlendMode: "overlay" }}>
                          <path
                            d="M38.4258 100.4L60.8354 77.9905L64.9984 79.5041C68.0259 80.7105 70.0098 83.6577 70.0002 86.9345V100.4H57.9994V88.4001L54.9994 100.4H38.4258Z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          d="M60.8353 77.9904L38.4258 100.4H38.4344L14.9992 100.4L14.3122 97.652L33.4068 78.5574C33.9237 78.5924 34.4547 78.6146 35 78.624C41.308 78.7344 45.648 76.9904 48.4305 73.48L60.8353 77.9904Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M11.9992 100.4V99.965L11.5642 100.4H11.9992Z"
                          fill="#FFC82D"
                        />
                        <path
                          d="M34.15 78.5984C28.4858 78.3542 24.4439 76.6523 21.7558 73.3999L5.00191 79.5039C1.97282 80.7103 -0.0110435 83.6575 4.62553e-05 86.9343V100.4H11.5643L11.9992 99.965V100.4L11.9993 88.3999L14.3123 97.6519L33.4068 78.5574C33.6513 78.574 33.8991 78.5876 34.15 78.5984Z"
                          fill="#FE9D39"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="21.5343"
                            y1={20}
                            x2="57.3873"
                            y2="63.6438"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient2"
                            x1="53.1988"
                            y1="39.1308"
                            x2="24.1082"
                            y2="18.4752"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                          <linearGradient
                            id="gradient3"
                            x1="26.9993"
                            y1="60.8672"
                            x2="41.7705"
                            y2="66.0155"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop
                              offset={1}
                              stopColor="#FFFFFF"
                              stopOpacity="0.5"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h2>User-friendly</h2>
                    <p>
                      We've prepared extensive detailed guides and video tutorials
                      for you. Whether you're a new or advanced user, our 24/7
                      Support Team is here to help.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

          </main>
          <footer className="x__footer">
            <div className="x__footer__content">
              <div className="x__footer__content-top">
                <div className="x__footer-navigation" id="footernav">
                  <div className="x__footer-navigation-col">
                    <div id="footernavheading0">
                      <p className="x__footer-navigation__heading" tabIndex={0}>
                        Products
                      </p>
                    </div>
                    <div className="collapse show">
                      <a
                        className="x__footer-navigation__link"
                        href="/web3-wallet/"
                      >
                        Web3 Wallet
                      </a>
                      <a
                        href="https://exodus.com/mobile/"
                        className="x__footer-navigation__link"
                        target="_self"
                      >
                        Mobile Wallet
                      </a>
                      <a
                        href="https://exodus.com/desktop/"
                        className="x__footer-navigation__link"
                        target="_self"
                      >
                        Desktop Wallet
                      </a>
                      <a
                        className="x__footer-navigation__link"
                        href="/trezor-wallet/"
                      >
                        Trezor Hardware Wallet
                      </a>
                      <a
                        className="x__footer-navigation__link"
                        href="/earn-crypto/"
                      >
                        Earn Crypto Rewards
                      </a>
                      <a className="x__footer-navigation__link" href="/xo-swap/">
                        XO Swap
                      </a>
                      <a
                        href="https://passkeys.foundation/"
                        className="x__footer-navigation__link"
                        target="_blank" rel="noreferrer"
                      >
                        Passkeys Wallet &amp; SDK
                      </a>
                    </div>
                    <span className="x__footer-navigation__arrow" />
                  </div>
                  <div className="x__footer-navigation-col">
                    <div id="footernavheading1">
                      <p className="x__footer-navigation__heading" tabIndex={0}>
                        Support
                      </p>
                    </div>
                    <div className="collapse show">
                      <a
                        className="x__footer-navigation__link"
                        href="/contact-support/"
                      >
                        Support
                      </a>
                      <a
                        href="https://www.exodus.com/support"
                        className="x__footer-navigation__link"
                        target="_blank" rel="noreferrer"
                      >
                        Knowledge Base
                      </a>
                      <a
                        className="x__footer-navigation__link"
                        href="/legal-inquiries/"
                      >
                        Legal Inquiries
                      </a>
                      <a className="x__footer-navigation__link" href="/status/">
                        Status
                      </a>
                      <a
                        href="https://www.youtube.com/c/exodus/"
                        className="x__footer-navigation__link"
                        target="_blank" rel="noreferrer"
                      >
                        YouTube
                      </a>
                      <a className="x__footer-navigation__link" href="/newsletter/">
                        Newsletter
                      </a>
                    </div>
                    <span className="x__footer-navigation__arrow" />
                  </div>
                  <div className="x__footer-navigation-col">
                    <div id="footernavheading2">
                      <p className="x__footer-navigation__heading" tabIndex={0}>
                        Company
                      </p>
                    </div>
                    <div className="collapse show">
                      <a className="x__footer-navigation__link" href="/about/">
                        About Us
                      </a>
                      <a className="x__footer-navigation__link" href="/investors/">
                        Investors
                      </a>
                      <a className="x__footer-navigation__link" href="/careers/">
                        Careers
                      </a>
                      <a className="x__footer-navigation__link" href="/contact/">
                        Contact Us
                      </a>
                      <a className="x__footer-navigation__link" href="/brand/">
                        Brand Guidelines
                      </a>
                      <a className="x__footer-navigation__link" href="/security/">
                        Security
                      </a>
                    </div>
                    <span className="x__footer-navigation__arrow" />
                  </div>
                </div>
                <div className="x__subscribe-module">
                  <p className="x__subscribe-module__heading">
                    Subscribe to Exodus
                  </p>
                  <p className="x__subscribe-module__copy">
                    Sign up to receive our newsletter with updates about your
                    wallet.
                  </p>
                  <a className="x__button" id="subscribeModule" href="/newsletter/">
                    <span className="x__button-align">
                      <span className="x__button-align-text">Sign me up</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="x__footer__content-center row">
                <div className="col col-md-7 col-12">
                  <div className="x__copyright">
                    <div className="x__copyright__logo">
                      <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                      >
                        <div style={{ maxWidth: 156, display: "block" }}>
                          <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='32' width='156' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              position: "static"
                            }}
                          />
                        </div>
                        <div
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: "opacity 500ms linear",
                            backgroundColor: "rgb(8, 8, 8)",
                            position: "absolute",
                            inset: 0
                          }}
                        ></div>
                        <img
                          data-main-image=""
                          style={{ opacity: 1 }}
                          sizes="(min-width: 156px) 156px, 100vw"
                          decoding="async"
                          loading="lazy"
                          alt="Exodus Logo"
                          src="/asset-page/img/btc/exodus-logo.webp"

                        />
                      </div>
                    </div>
                    <div className="x__copyright__copy">
                      Copyright © 2024 Exodus Movement, Inc.
                      <br />
                      Exodus was co-founded by Daniel Castagnoli and JP Richardson.
                    </div>
                  </div>
                </div>
                <div className="col col-md-5 col-12">
                  <div className="x__social">
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Discord"
                      href="http://discord.gg/exodus"
                    >
                      <svg
                        viewBox="0 0 27 20"
                        enableBackground="new 0 0 27 20"
                        height={20}
                        width={27}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Discord</title>
                        <path d="M22.213 1.658A21.638 21.638 0 0016.872 0a.081.081 0 00-.086.041c-.23.41-.486.945-.665 1.366a19.976 19.976 0 00-5.999 0C9.943.978 9.678.452 9.447.042a.084.084 0 00-.086-.04A21.578 21.578 0 004.02 1.657a.076.076 0 00-.035.03C.583 6.77-.35 11.728.108 16.623a.09.09 0 00.035.061 21.759 21.759 0 006.552 3.312c.034.01.07-.002.092-.03.504-.69.954-1.416 1.34-2.18a.083.083 0 00-.045-.116c-.714-.27-1.394-.6-2.047-.975a.084.084 0 01-.009-.14c.138-.103.276-.21.407-.318a.081.081 0 01.085-.012c4.294 1.96 8.943 1.96 13.186 0a.08.08 0 01.086.01c.132.109.27.217.408.32a.084.084 0 01-.007.14c-.654.382-1.334.705-2.048.974a.084.084 0 00-.045.117c.394.763.844 1.49 1.34 2.18.02.028.058.04.092.03a21.687 21.687 0 006.562-3.312.084.084 0 00.034-.06c.547-5.66-.916-10.576-3.88-14.935a.067.067 0 00-.033-.031zM8.768 13.642c-1.293 0-2.358-1.187-2.358-2.645 0-1.457 1.045-2.644 2.358-2.644 1.324 0 2.38 1.197 2.358 2.644 0 1.458-1.044 2.645-2.358 2.645zm8.719 0c-1.293 0-2.358-1.187-2.358-2.645 0-1.457 1.045-2.644 2.358-2.644 1.324 0 2.379 1.197 2.358 2.644 0 1.458-1.034 2.645-2.358 2.645z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Github"
                      href="https://github.com/ExodusMovement"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Github</title>
                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="YouTube"
                      href="https://www.youtube.com/c/exodus"
                    >
                      <svg
                        viewBox="0 0 26 18"
                        enableBackground="new 0 0 26 18"
                        height={18}
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>YouTube</title>
                        <path d="M25.457 2.78A3.244 3.244 0 0 0 23.194.537C21.168 0 13.012 0 13.012 0S4.876-.01 2.829.538A3.244 3.244 0 0 0 .566 2.779 33.238 33.238 0 0 0 0 9.011c-.006 2.083.183 4.161.566 6.209a3.244 3.244 0 0 0 2.263 2.241C4.853 18 13.012 18 13.012 18s8.134 0 10.182-.539a3.244 3.244 0 0 0 2.263-2.241c.375-2.049.556-4.127.542-6.209a33.237 33.237 0 0 0-.542-6.232zM10.408 12.865V5.144l6.789 3.867-6.789 3.855z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Reddit"
                      href="https://www.reddit.com/r/ExodusWallet"
                    >
                      <svg
                        viewBox="0 0 26 22"
                        enableBackground="new 0 0 26 22"
                        height={22}
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Reddit</title>
                        <path d="M16.867 14.2c-.971 0-1.788-.777-1.788-1.736s.817-1.762 1.788-1.762c.972 0 1.76.803 1.76 1.762s-.788 1.736-1.76 1.736m.413 3.371c-.905.892-2.3 1.326-4.267 1.326h-.028c-1.966 0-3.36-.434-4.265-1.326a.693.693 0 010-.99.717.717 0 011.004 0c.624.615 1.69.915 3.261.915h.028c1.57 0 2.638-.3 3.263-.916a.717.717 0 011.004 0 .695.695 0 010 .991m-9.907-5.107c0-.958.815-1.762 1.785-1.762.972 0 1.76.804 1.76 1.762 0 .959-.788 1.736-1.76 1.736-.97 0-1.785-.777-1.785-1.736M21.664 1.4c.659 0 1.194.529 1.194 1.177 0 .65-.535 1.178-1.194 1.178a1.187 1.187 0 01-1.193-1.178c0-.648.535-1.177 1.194-1.177M26 10.557c0-1.7-1.402-3.084-3.125-3.084-.746 0-1.43.26-1.969.692-1.905-1.182-4.323-1.894-6.915-2.044l1.352-4.218 3.716.863c.097 1.335 1.228 2.392 2.605 2.392 1.441 0 2.613-1.157 2.613-2.58C24.277 1.157 23.105 0 21.664 0a2.62 2.62 0 00-2.32 1.393L15.028.39a.71.71 0 00-.84.47L12.51 6.096c-2.792.067-5.418.781-7.463 2.032a3.135 3.135 0 00-1.921-.655C1.402 7.473 0 8.856 0 10.557c0 1.05.536 1.98 1.353 2.536-.034.245-.052.49-.052.74 0 2.126 1.252 4.103 3.525 5.567 2.18 1.404 5.064 2.177 8.121 2.177 3.058 0 5.942-.773 8.121-2.177 2.273-1.464 3.526-3.441 3.526-5.567 0-.227-.016-.452-.044-.676a3.073 3.073 0 001.45-2.6"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Twitter"
                      href="https://twitter.com/exodus_io"
                    >
                      <svg
                        viewBox="0 0 24 20"
                        enableBackground="new 0 0 24 20"
                        height={20}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Twitter</title>
                        <path d="M.056 0l8.88 11.873L0 21.527h2.011l7.824-8.452 6.32 8.452H23L13.62 8.986 21.938 0h-2.011l-7.205 7.784L6.9 0H.056zm2.958 1.481h3.144l13.884 18.564h-3.144L3.014 1.481z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Instagram"
                      href="https://www.instagram.com/exodus"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85 0 3.204-.015 3.585-.074 4.85-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path>
                      </svg>
                    </a>
                    <a
                      className="x__social-link x__social-link--large"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Facebook"
                      href="https://www.facebook.com/exodus.io"
                    >
                      <svg
                        viewBox="0 0 24 22"
                        enableBackground="new 0 0 24 22"
                        height={22}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>Facebook</title>
                        <path d="m10.399 3.891c-0.60109-0.17553-1.2923-0.29255-1.9235-0.29255-0.78142 0-2.4645 0.49734-2.4645 1.4628v2.3112h3.9973v3.891h-3.9973v10.737h-4.0273v-10.737h-1.9836v-3.891h1.9836v-1.9601c0-2.9548 1.3825-5.4122 4.7186-5.4122 1.1421 0 3.1858 0.058511 4.2978 0.43883l-0.60109 3.4521z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="x__footer__content-bottom row">
                <div className="col col-12">
                  <div className="x__terms">
                    <span>
                      Exodus is a software platform ONLY and does not conduct any
                      independent diligence on or substantive review of any
                      blockchain asset, digital currency, cryptocurrency or
                      associated funds. You are fully and solely responsible for
                      evaluating your investments, for determining whether you will
                      swap blockchain assets based on your own, and for all your
                      decisions as to whether to swap blockchain assets with the
                      Exodus in app swap feature. In many cases, blockchain assets
                      you swap on the basis of your research may not increase in
                      value, and may decrease in value. Similarly, blockchain assets
                      you swap on the basis of your research may increase in value
                      after your swap.
                    </span>
                    <span>
                      Past performance is not indicative of future results. Any
                      investment in blockchain assets involves the risk of loss of
                      part or all of your investment. The value of the blockchain
                      assets you swap is subject to market and other investment
                      risks.
                    </span>
                    <span>
                      Exodus users are responsible for storing their own recovery
                      phrase. If the recovery phrase is lost, the user might not be
                      able to retrieve their private keys.
                    </span>
                    <span>
                      <a target="_blank" rel="noreferrer noopener" href="/privacy/">
                        Privacy Policy
                      </a>
                      <a target="_blank" rel="noreferrer noopener" href="/terms/">
                        Terms of Service
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="/trademarks/"
                      >
                        Trademarks
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </Layout>
)}

export const Head = () => <Seo title="Page two" description={undefined} children={undefined} />

export default SecondPage


export const pageQuery = graphql`
query {
  allContentfulHeroPanel(sort: {order: ASC}) {
    nodes {
      id
      title
      hasBackground
      text {
        text
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, resizingBehavior: SCALE, height: 600)
      }
    }
  }
  allContentfulSummaryPanel(sort: {order: ASC}) {
    nodes {
      id
      title
      text {
        text
      }
      previewImage {
        publicUrl
        url
      }
    }
  }
}
  ` 