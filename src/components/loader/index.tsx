import { Box, styled } from "@mui/material";
import { BetSaveLogoImg } from "../../constants/images";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = (props: LoaderProps) => {
  const { onComplete } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const minDuration = 0; // Minimum loader time (0s)
    const startTime = Date.now();

    const updateProgress = () => {
      setProgress((prev) => (prev < 95 ? prev + 5 : prev)); // Don't jump to 100% immediately
    };

    const interval = setInterval(updateProgress, 100); // Update every 100ms

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDuration - elapsedTime);

      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        onComplete();
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad(); // If already loaded, wait for minDuration
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, [onComplete]);

  return (
    <Container>
      <LoaderContainer>
        <LogoImg src={BetSaveLogoImg} alt="logo-img" />
        <BorderLinearProgress variant="determinate" value={progress} />
      </LoaderContainer>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0C1221",
}));

const LoaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  width: "500px",
  [theme.breakpoints.down(640)]: {
    width: "320px",
  },

  [theme.breakpoints.down(390)]: {
    width: "280px",
  },
}));

const LogoImg = styled("img")(({ theme }) => ({
  width: "320px",
  height: "auto",
  [theme.breakpoints.down(640)]: {
    width: "240px",
  },
  [theme.breakpoints.down(390)]: {
    width: "200px",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
