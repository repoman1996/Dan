import { Box, Button, styled, Typography } from "@mui/material";
import {
  AppleIcon,
  BasketPng,
  BlackjackPng,
  BronzeIcon,
  CalendarPng,
  CashbackPng,
  CrashPng,
  DealerPng,
  FacebookIcon,
  FootballPng,
  GamepadPng,
  GlovesPng,
  GoldIcon,
  GoogleIcon,
  MessagePng,
  PlatinumIcon,
  Present1Png,
  RoulettePng,
  SilverIcon,
  SlotsPng,
  StreamIcon,
  SuperHeroWheelPng,
  TopBetPng,
  UnicornPng,
} from "../constants/images";
import { StyledBadge } from "../components/badge";
import { FaArrowRight } from "react-icons/fa6";

const CasinoItems = [
  {
    title: "SLOTS",
    onlineMembers: 729,
    link: "/",
    img: SlotsPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #152130 29.04%, #00EEFF 225.53%)",
      buttonBorder: "2px solid rgba(53, 252, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #35FCFF 0%, #00979B 100%)",
    },
  },
  {
    title: "BLACKJACK",
    onlineMembers: 1890,
    link: "/",
    img: BlackjackPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #201530 29.04%, #FF00FB 225.53%)",
      buttonBorder: "2px solid rgba(255, 110, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #FF2EFC 0%, #A500A1 100%)",
    },
  },
  {
    title: "ROULETTE",
    onlineMembers: 569,
    link: "/",
    img: RoulettePng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #151A30 29.04%, #005EFF 225.53%)",
      buttonBorder: "2px solid rgba(119, 201, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #77C9FF 0%, #005EFF 100%)",
    },
  },
  {
    title: "CRASH",
    onlineMembers: 321,
    link: "/",
    img: CrashPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #151930 29.04%, #5E00FF 225.53%)",
      buttonBorder: "2px solid rgba(154, 95, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #853EFF 0%, #360AD7 100%)",
    },
  },
  {
    title: "DEALER",
    onlineMembers: 1072,
    link: "/",
    img: DealerPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #151A30 29.04%, #D0FF00 225.53%)",
      buttonBorder: "2px solid rgba(223, 255, 82, 1)",
      buttonBackground: "linear-gradient(180deg, #D6FF21 0%, #6C9B00 100%)",
    },
  },
];

const SportsbookItems = [
  {
    title: "RACING",
    onlineMembers: 729,
    link: "/",
    img: UnicornPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #201530 29.04%, #FF00FB 225.53%)",
      buttonBorder: "2px solid rgba(255, 110, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #FF2EFC 0%, #A500A1 100%)",
    },
  },
  {
    title: "FOOTBALL",
    onlineMembers: 1890,
    link: "/",
    img: FootballPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #151930 29.04%, #5E00FF 225.53%)",
      buttonBorder: "2px solid rgba(154, 95, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #853EFF 0%, #360AD7 100%)",
    },
  },
  {
    title: "BASKETBALL",
    onlineMembers: 1890,
    link: "/",
    img: BasketPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #281613 29.04%, #FF5500 225.53%)",
      buttonBorder: "2px solid rgba(255, 127, 84, 1)",
      buttonBackground: "linear-gradient(180deg, #FF7F54 0%, #A92D00 100%)",
    },
  },
  {
    title: "UFC",
    onlineMembers: 1072,
    link: "/",
    img: GlovesPng,
    style: {
      linearColor:
        "linear-gradient(128.24deg, #301523 28.35%, #FF002F 226.66%)",
      buttonBorder: "2px solid rgba(255, 85, 116, 1)",
      buttonBackground: "linear-gradient(180deg, #FF5574 0%, #A8001F 100%)",
    },
  },
  {
    title: "ESPORTS",
    onlineMembers: 321,
    link: "/",
    img: GamepadPng,
    style: {
      linearColor:
        "linear-gradient(126.11deg, #151930 29.04%, #9000FF 225.53%)",
      buttonBorder: "2px solid rgba(178, 78, 255, 1)",
      buttonBackground: "linear-gradient(180deg, #B24EFF 0%, #6700B6 100%)",
    },
  },
];

const ReasonData = [
  {
    icon: TopBetPng,
    title: "Top Betting & Casino Brands",
    subTitle: "Access leading sportsbooks and online casinos. ",
  },
  {
    icon: CashbackPng,
    title: "Cashback on Net Losses",
    subTitle: "Earn monthly cashback based on your net losses (NGR).",
  },
  {
    icon: MessagePng,
    title: "Simple & Seamless Platform",
    subTitle: "Track offers, activity, and rewards easily.",
  },
  {
    icon: CalendarPng,
    title: "Monthly Payouts",
    subTitle: "Receive cashback monthly with secure withdrawals.",
  },
];
export const NewLanding = () => {
  return (
    <Container>
      <EarnSection>
        <EarnSectionLeft>
          <EarnTitleContainer>
            <EarnTitle>Get Paid to Play & Bet -</EarnTitle>
            <EarnSubTitle>
              Earn Up to <span>15% Cashback</span>
            </EarnSubTitle>
            <EarnDescription>
              Whether you're betting on sports or playing casino games, BETSAVE
              gives you cashback every month based on your Net Gaming Revenue
              (NGR).
            </EarnDescription>
          </EarnTitleContainer>
          <EarnAction>
            <RegisterButton>Register Now</RegisterButton>
            <SocialButtonContainer>
              <SocialButton>
                <Img src={GoogleIcon} alt="google" />
              </SocialButton>
              <SocialButton>
                <Img src={FacebookIcon} alt="facebook" />
              </SocialButton>
              <SocialButton>
                <Img src={StreamIcon} alt="stream" />
              </SocialButton>
              <SocialButton>
                <Img src={AppleIcon} alt="apple" />
              </SocialButton>
            </SocialButtonContainer>
          </EarnAction>
        </EarnSectionLeft>
        <MarketImg src={SuperHeroWheelPng} alt="market" />
      </EarnSection>
      <ProcessSection>
        <ProcessTitleContainer>
          <ProcessTitle>How it works</ProcessTitle>
          <ProcessSubTitle>
            Explore the Complete Process: Learn How It Works for Effortless
            Success and Maximum Benefits!
          </ProcessSubTitle>
        </ProcessTitleContainer>
        <ProcessAction>
          <ProcessActionItemContainer>
            <ProcessActionItem
              id={1}
              title="Create a fee account!"
              text="Sign up for free to access exclusive sportsbook and casino offers. "
            />
            <ProcessActionItem
              id={2}
              title="Choose an offer!"
              text="Register with a partner through our referral link."
            />
            <ProcessActionItem
              id={3}
              title="Bet and play!"
              text="Bet on sports or play casino games through partner platforms."
            />
          </ProcessActionItemContainer>
          <ProcessActionImage1 src={Present1Png} alt="present" />
        </ProcessAction>
      </ProcessSection>
      <TierSection>
        <TierSectionTitleContainer>
          <TierSectionTitle>NGR-Based Cashback Tier</TierSectionTitle>
          <TierSectionSubTitle>
            Your total cashback is based on your monthly NGR across sportsbook
            and casino combined.{" "}
          </TierSectionSubTitle>
        </TierSectionTitleContainer>
        <TierItemContainer>
          <TierItem
            icon={BronzeIcon}
            title="Bronze"
            content="<$500 NGR + 5% Cashback"
          />
          <TierItem
            icon={SilverIcon}
            title="Silver"
            content="$1000 NGR + 5% Cashback"
          />
          <TierItem
            icon={GoldIcon}
            title="Gold"
            content="$2000 NGR + 7% Cashback "
          />
          <TierItem
            icon={PlatinumIcon}
            title="Platinum"
            content="$5000 NGR + 10% Cashback"
          />
        </TierItemContainer>
      </TierSection>
      <CasinoSection>
        <CasinoSectionTitleContainer>
          <CasinoSectionTitle>Casino</CasinoSectionTitle>
          <CasinoSectionSubTitle>
            Play Casino Games & Earn Cashback Monthly Based on Your NGR.
          </CasinoSectionSubTitle>
        </CasinoSectionTitleContainer>
        <CasinoSectionItems>
          {CasinoItems.map((item) => (
            <CasinoSectionItem
              key={item.title}
              title={item.title}
              onlineMembers={item.onlineMembers}
              link={item.link}
              img={item.img}
              styles={item.style}
            />
          ))}
        </CasinoSectionItems>
      </CasinoSection>
      <CasinoSection>
        <CasinoSectionTitleContainer>
          <CasinoSectionTitle>Sportsbook</CasinoSectionTitle>
          <CasinoSectionSubTitle>
            Place Sports Bets & Get Up to 15% Cashback on Your NGR.
          </CasinoSectionSubTitle>
        </CasinoSectionTitleContainer>
        <CasinoSectionItems>
          {SportsbookItems.map((item) => (
            <CasinoSectionItem
              key={item.title}
              title={item.title}
              onlineMembers={item.onlineMembers}
              link={item.link}
              img={item.img}
              styles={item.style}
            />
          ))}
        </CasinoSectionItems>
      </CasinoSection>
      <ReasonSection>
        <ReasonSectionTitleContainer>
          <ReasonSectionTitle>Why Choose BETSAVE?</ReasonSectionTitle>
          <ReasonSectionSubTitle>
            Discover Why BetSave is the Top Choice for Ultimate Gaming
            Experience!
          </ReasonSectionSubTitle>
        </ReasonSectionTitleContainer>
        <ReasonSectionItems>
          {ReasonData.map((item) => (
            <ReasonItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </ReasonSectionItems>
      </ReasonSection>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "100px",
  maxWidth: "1960px",
  [theme.breakpoints.down(1440)]: {
    gap: "80px",
  },

  [theme.breakpoints.down(540)]: {
    gap: "40px",
  },
}));

const EarnSection = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "75px 0px 0px 60px",
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  position: "relative",
  [theme.breakpoints.down(1440)]: {
    padding: "45px 0px 0px 30px",
  },
  [theme.breakpoints.down(960)]: {
    justifyContent: "center",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  [theme.breakpoints.down(540)]: {
    padding: "0",
  },
}));

const EarnSectionLeft = styled(Box)(({ theme }) => ({
  width: "700px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  [theme.breakpoints.down(1650)]: {
    width: "540px",
  },
  [theme.breakpoints.down(1280)]: {
    width: "400px",
  },
  [theme.breakpoints.down(960)]: {
    width: "100%",
  },
  [theme.breakpoints.down(480)]: {
    gap: "20px",
  },
}));

const EarnTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  [theme.breakpoints.down(480)]: {
    gap: "10px",
  },
}));

const EarnTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "500",
  color: "#fff",
  [theme.breakpoints.down(1650)]: {
    fontSize: "36px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down(480)]: {
    fontSize: "24px",
  },
}));

const EarnSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "84px",
  fontWeight: "700",
  color: "#fff",
  lineHeight: "72px",
  span: {
    color: "#1AE5A1",
  },
  [theme.breakpoints.down(1650)]: {
    fontSize: "64px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "54px",
    lineHeight: "48px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "42px",
  },
  [theme.breakpoints.down(480)]: {
    fontSize: "32px",
    lineHeight: "32px",
  },
}));

const EarnDescription = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "400",
  color: "#627691",
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(480)]: {
    fontSize: "14px",
  },
}));

const EarnAction = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down(480)]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1AE5A1",
  color: "#000",
  borderRadius: "10px",
  padding: "0 30px",
  height: "60px",
  fontSize: "20px",
  fontWeight: "600",
  textTransform: "none",
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
    padding: "0 20px",
    height: "50px",
  },
}));

const SocialButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
}));

const SocialButton = styled(Button)(({ theme }) => ({
  width: "60px",
  height: "60px",
  minWidth: "60px",
  borderRadius: "14px",
  backgroundColor: "#fff",
  background: "linear-gradient(180deg, #172236 0%, #212C40 100%)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  [theme.breakpoints.down(1280)]: {
    width: "50px",
    height: "50px",
    minWidth: "50px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  [theme.breakpoints.down(1280)]: {
    width: "20px",
    height: "20px",
  },
}));

const ProcessSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "0px 75px",
  [theme.breakpoints.down(1440)]: {
    padding: "0px 30px",
    gap: "40px",
  },

  [theme.breakpoints.down(540)]: {
    padding: "0px",
    gap: "25px",
  },
}));

const ProcessTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  [theme.breakpoints.down(540)]: {
    gap: "10px",
  },
}));

const ProcessTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "700",
  color: "#fff",
  [theme.breakpoints.down(1280)]: {
    fontSize: "36px",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "28px",
  },
}));

const ProcessSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "500",
  color: "#627691",
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "14px",
  },
}));

const ProcessAction = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "30px",
  [theme.breakpoints.down(1280)]: {
    gridTemplateColumns: "1fr",
    gap: "25px",
  },
}));

const ProcessActionItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  [theme.breakpoints.down(960)]: {
    gap: "15px",
  },
  [theme.breakpoints.down(540)]: {
    gap: "12px",
  },
}));

interface ItemProps {
  id: number;
  title: string;
  text: string;
}

const ProcessActionItem = (props: ItemProps) => {
  const { id, title, text } = props;
  return (
    <ProcessActionItemWrapper>
      <ProcessActionItemNumber>{id}</ProcessActionItemNumber>
      <ProcessActionItemContent>
        <ProcessActionItemTitle>{title}</ProcessActionItemTitle>
        <ProcessActionItemText>{text}</ProcessActionItemText>
      </ProcessActionItemContent>
    </ProcessActionItemWrapper>
  );
};

const ProcessActionItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "25px",
  padding: "20px",
  borderRadius: "20px",
  backgroundColor: "#151A30",
  width: "100%",
  [theme.breakpoints.down(960)]: {
    padding: "16px",
    gap: "15px",
    borderRadius: "18px",
  },
  [theme.breakpoints.down(540)]: {
    padding: "14px",
    gap: "12px",
    borderRadius: "16px",
  },
}));

const ProcessActionItemNumber = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "700",
  color: "#000",
  backgroundColor: "#1AE5A1",
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  [theme.breakpoints.down(960)]: {
    width: "36px",
    height: "36px",
    fontSize: "16px",
    borderRadius: "8px",
  },
  [theme.breakpoints.down(540)]: {
    width: "32px",
    height: "32px",
    fontSize: "14px",
    borderRadius: "6px",
  },
}));

const ProcessActionItemContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down(960)]: {
    gap: "8px",
  },
  [theme.breakpoints.down(540)]: {
    gap: "6px",
  },
}));

const ProcessActionItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: "700",
  color: "#fff",
  [theme.breakpoints.down(1280)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "18px",
  },
}));

const ProcessActionItemText = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "400",
  color: "#627691",
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "14px",
  },
}));

const MarketImg = styled("img")(({ theme }) => ({
  width: "1200px",
  height: "auto",
  objectFit: "cover",
  position: "absolute",
  top: "-50%",
  right: "-10%",
  zIndex: "-1",
  [theme.breakpoints.down(1650)]: {
    right: "-20%",
    top: "-45%",
  },
  [theme.breakpoints.down(1440)]: {
    width: "1000px",
    top: "-30%",
  },
  [theme.breakpoints.down(1280)]: {
    width: "900px",
    right: "-15%",
  },
  [theme.breakpoints.down(1140)]: {
    width: "800px",
    right: "-20%",
  },
  [theme.breakpoints.down(960)]: {
    width: "1000px",
    position: "static",
    marginTop: "-200px",
    marginRight: "30px",
  },
  [theme.breakpoints.down(640)]: {
    width: "800px",
    marginTop: "-150px",
    marginRight: "54px",
  },
  [theme.breakpoints.down(540)]: {
    width: "700px",
    marginTop: "-100px",
    marginRight: "24px",
  },
  [theme.breakpoints.down(480)]: {
    width: "600px",
    marginRight: "10px",
  },
  [theme.breakpoints.down(380)]: {
    width: "500px",
    marginRight: "0px",
  },
}));

const ProcessActionImage1 = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
  [theme.breakpoints.down(960)]: {
    borderRadius: "18px",
  },
  [theme.breakpoints.down(540)]: {
    borderRadius: "16px",
  },
}));

const TierSection = ProcessSection;
const TierSectionTitleContainer = ProcessTitleContainer;
const TierSectionTitle = ProcessTitle;
const TierSectionSubTitle = ProcessSubTitle;

const TierItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down(1376)]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
  [theme.breakpoints.down(640)]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

interface TierItemProps {
  icon: string;
  title: string;
  content: string;
}

const TierItem = (props: TierItemProps) => {
  const { icon, title, content } = props;
  return (
    <TierItemWrapper>
      <TierItemIcon src={icon} alt="tier" />
      <TierItemContent>
        <TierItemTitle>{title}</TierItemTitle>
        <TierItemSubTitle>{content}</TierItemSubTitle>
      </TierItemContent>
    </TierItemWrapper>
  );
};

const TierItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "center",
  width: "100%",
  padding: "30px 10px",
  background: "linear-gradient(180deg, #14393C 0%, #152330 100%)",
  position: "relative",
  borderRadius: "20px",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: "1px",
    borderRadius: "20px",
    background: "linear-gradient(180deg, #1AE5A1 0%, #0D1321 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "20px",
    background:
      "radial-gradient(circle at 50% 0%, rgba(26, 229, 161, 0.15), transparent 70%)",
    pointerEvents: "none",
  },
}));

const TierItemIcon = styled("img")(({ theme }) => ({
  width: "180px",
  height: "180px",
  objectFit: "contain",
  [theme.breakpoints.down(1800)]: {
    width: "140px",
    height: "140px",
  },
  [theme.breakpoints.down(840)]: {
    width: "100px",
    height: "100px",
  },
}));

const TierItemContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
}));

const TierItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "500",
  color: "#fff",
  [theme.breakpoints.down(1800)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down(840)]: {
    fontSize: "24px",
  },
}));

const TierItemSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: "500",
  color: "#627691",
  [theme.breakpoints.down(1800)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(840)]: {
    fontSize: "16px",
  },
}));

const CasinoSection = ProcessSection;
const CasinoSectionTitleContainer = ProcessTitleContainer;
const CasinoSectionTitle = ProcessTitle;
const CasinoSectionSubTitle = ProcessSubTitle;

const CasinoSectionItems = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  [theme.breakpoints.down(1084)]: {
    gap: "15px",
    flexWrap: "nowrap",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down(960)]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down(640)]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

interface CasinoSectionItemProps {
  title: string;
  onlineMembers: number;
  link: string;
  img: string;
  styles: {
    linearColor: string;
    buttonBorder: string;
    buttonBackground: string;
  };
}

const CasinoSectionItem = (props: CasinoSectionItemProps) => {
  const { title, onlineMembers, link, img, styles } = props;
  return (
    <CasinoSectionItemWrapper style={{ background: styles.linearColor }}>
      <CasinoSectionItemTitle>{title}</CasinoSectionItemTitle>
      <CasinoSectionItemOnlineMembers>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ horizontal: "left" }}
          variant="dot"
        />
        {onlineMembers}
      </CasinoSectionItemOnlineMembers>
      <CasinoLinkButton
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        style={{
          border: styles.buttonBorder,
          background: styles.buttonBackground,
        }}
      >
        <FaArrowRight />
      </CasinoLinkButton>
      <CasinoSectionImage src={img} alt="casino" />
    </CasinoSectionItemWrapper>
  );
};

const CasinoSectionItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "25px 35px",
  borderRadius: "30px",
  position: "relative",
  overflow: "hidden",
  width: "320px",
  height: "240px",
  [theme.breakpoints.down(1440)]: {
    width: "300px",
    height: "220px",
    padding: "22px 30px",
  },
  [theme.breakpoints.down(1084)]: {
    width: "100%",
    padding: "20px 28px",
  },
}));

const CasinoSectionItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "700",
  color: "#fff",
  letterSpacing: "0%",
  fontFamily: "Unbounded",
  [theme.breakpoints.down(1440)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "18px",
  },
}));

const CasinoSectionItemOnlineMembers = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  fontSize: "18px",
  fontWeight: "500",
  color: "#fff",
  marginLeft: "10px",
  [theme.breakpoints.down(1440)]: {
    fontSize: "16px",
    gap: "15px",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "15px",
    gap: "12px",
  },
  [theme.breakpoints.down(540)]: {
    fontSize: "14px",
    gap: "10px",
  },
}));

const CasinoLinkButton = styled(Button)(({ theme }) => ({
  width: "42px",
  height: "42px",
  minWidth: "42px",
  borderRadius: "10px",
  color: "#fff",
  fontSize: "20px",
  [theme.breakpoints.down(1440)]: {
    width: "40px",
    height: "40px",
    minWidth: "40px",
    fontSize: "18px",
  },
  [theme.breakpoints.down(960)]: {
    width: "38px",
    height: "38px",
    minWidth: "38px",
    fontSize: "16px",
  },
  [theme.breakpoints.down(540)]: {
    width: "36px",
    height: "36px",
    minWidth: "36px",
    fontSize: "15px",
  },
}));

const CasinoSectionImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  position: "absolute",
  top: "50px",
  left: "96px",
  transform: "rotate(-6.5deg)",
  [theme.breakpoints.down(1440)]: {
    top: "45px",
    left: "90px",
  },
  [theme.breakpoints.down(960)]: {
    top: "40px",
    left: "85px",
  },
  [theme.breakpoints.down(540)]: {
    top: "35px",
    left: "80px",
  },
}));

const ReasonSection = ProcessSection;
const ReasonSectionTitleContainer = ProcessTitleContainer;
const ReasonSectionTitle = ProcessTitle;
const ReasonSectionSubTitle = ProcessSubTitle;

const ReasonSectionItems = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
  [theme.breakpoints.down(768)]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

interface ReasonItemProps {
  icon: string;
  title: string;
  subTitle: string;
}

const ReasonItem = (props: ReasonItemProps) => {
  const { icon, title, subTitle } = props;
  return (
    <ReasonItemWrapper>
      <ReasonItemIcon src={icon} alt="reason" />
      <ReasonItemContent>
        <ReasonItemTitle>{title}</ReasonItemTitle>
        <ReasonItemSubTitle>{subTitle}</ReasonItemSubTitle>
      </ReasonItemContent>
    </ReasonItemWrapper>
  );
};

const ReasonItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "35px",
  borderRadius: "30px",
  overflow: "hidden",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #14393C 0%, #152330 100%)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: "1px",
    borderRadius: "30px",
    background: "linear-gradient(180deg, #1AE5A1 0%, #0D1321 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "20px",
    background:
      "radial-gradient(circle at 50% 0%, rgba(26, 229, 161, 0.15), transparent 70%)",
    pointerEvents: "none",
  },
  [theme.breakpoints.down(640)]: {
    padding: "24px",
    gap: "4px",
  },
}));

const ReasonItemIcon = styled("img")(({ theme }) => ({
  width: "180px",
  height: "180px",
  objectFit: "contain",
  [theme.breakpoints.down(1500)]: {
    width: "140px",
    height: "140px",
  },
  [theme.breakpoints.down(1280)]: {
    width: "120px",
    height: "120px",
  },
}));

const ReasonItemContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down(768)]: {
    gap: "16px",
  },
  [theme.breakpoints.down(640)]: {
    gap: "4px",
  },
}));

const ReasonItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "600",
  color: "#fff",
  textAlign: "center",
  [theme.breakpoints.down(1500)]: {
    fontSize: "36px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down(840)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(480)]: {
    fontSize: "20px",
  },
}));

const ReasonItemSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "500",
  color: "#627691",
  textAlign: "center",
  [theme.breakpoints.down(1500)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(840)]: {
    fontSize: "14px",
  },
}));
