"use client";

import {
  Box,
  Button,
  Container,
  Table,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Link,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useRouter } from "next/navigation";

const rows = [
  { member: "Aaditya Anugu", contributions: "Intro and Background" },
  {
    member: "Justin Kang",
    contributions: "Problem definition, Methods, Potential Dataset",
  },
  {
    member: "Nathan Koehler",
    contributions: "Github Page, Presentation Slides",
  },
  {
    member: "Patrick Soo",
    contributions:
      "Problem definition, Methods, Potential Dataset, Video Creation",
  },
  {
    member: "Zhixuan Wang",
    contributions: "Problem Definition, Potential Dataset, Video Creation",
  },
];

export default function ProposalPage() {
  const router = useRouter();

  return (
    <Box
      sx={{ p: "24px 0", display: "flex", width: "100%", alignItems: "center" }}
    >
      <Container>
        <Typography typography="h3" align="center" sx={{ mb: 3 }}>
          Midterm Checkpoint
        </Typography>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Intro/Background
          </AccordionSummary>
          <AccordionDetails>
            <span>
              Geoguesser is a game in which players are randomly placed
              somewhere in Google Street View and need to guess what their exact
              location is.
              <br />
              <br />
              Previous literature [3][5] discusses using techniques like CNNs
              and transfer learning to analyze other image datasets to identify
              pneumonia in x-rays and find skin lesions and skin cancer from
              pictures. These papers have used these techniques to identify
              features that can help models classify an image. However, one of
              the shortcomings previous literature emphasizes is a lack of
              sufficient data in training models.
              <br />
              <br />
              The following dataset,{" "}
              <Link
                href="https://www.kaggle.com/datasets/ubitquitin/geolocation-geoguessr-images-50k"
                aria-label="Geoguessr image dataset"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeoLocation - Geoguessr Images (50K)
              </Link>
              , found through Kaggle, contains 50,000 streetview images of the
              world, with every image belonging to 1 of 150+ countries. The data
              itself is not uniform as there are more images within certain
              countries compared to others, but we plan to combine datasets and
              prune folders with insufficient data.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Problem Definition and Motivation
          </AccordionSummary>
          <AccordionDetails>
            We are interested in seeing if we can train a model to accurately
            perform this task of identifying key objects that belong to only
            specific parts of the world, and correctly identifying which country
            the street view image is from.
            <br />
            <br />
            This brings us to our problem - there may be certain circumstances
            in which it would be helpful to determine a relative location given
            a set of images, such as crime investigations. Thus, our motivation
            towards a potential solution to this is to start by using the
            Geoguessr dataset found through Kaggle, and train the dataset to
            determine which country it is in.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Methods</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6">Data Preprocessing</Typography>
            <ol>
              <li>
                Eliminating Bad Features
                <ul>
                  <li>
                    Data Pruning/Cleaning
                    <ul>
                      <li>
                        Getting rid of folders with small number of images
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Image Compression
                <ul>
                  <li>Standardization</li>
                </ul>
              </li>
            </ol>
            <Typography typography="h6">Steps for Standard Scaler</Typography>
            <ol>
              <li>
                Resize and make array of all images [img1, img2,...] for all
                folder
              </li>
              <li>
                Make array of all labels [label1, label2, …] (essentially img -
                label pair)
              </li>
              <li>
                Use train_test_split() on array of all images to create training
                and testing set.
              </li>
              <li>
                Use train_test_split() on training set to create training set
                and validation set
              </li>
              <li>Fit standard scaler to training set</li>
              <li>
                <div>
                  Transform training, validation, and testing sets using this
                  standard scaler
                </div>
                <Paper sx={{ px: 3, py: 2 }}>
                  <Typography typography="h6">Standard Scaler</Typography>
                  <br />
                  <Box sx={{ ml: 2 }}>
                    EX (step 3+):
                    <Box sx={{ ml: 2 }}>
                      <br />
                      X_train, X_test, y_train, y_test = train_test_split(X, y,
                      test_size = 0.15)
                      <br />
                      X_train, X_val, y_train, y_val = train_test_split(X_train,
                      y_train, test_size = 0.2)
                      <br />
                      scaler = StandardScaler()
                      <br />
                      X_train = scaler.fit_transform(X_train)
                      <br />
                      X_val = scaler.transform(X_val)
                      <br />
                      X_test = scaler.transform(X_test)
                    </Box>
                  </Box>
                </Paper>
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              &emsp;&emsp;Before our preprocessing step, we decided to first
              clean the dataset deleting non-uniform resolution images, and then
              deleted folders (classes) that had less than 100 images, as we
              believed it would be hard to classify images of those classes
              because of the small amount of data given. Lastly, due to the
              large dimensionality of the dataset, we decided to resize every
              remaining image into ⅓ of its original size.
              <br />
              <br />
              &emsp;&emsp;Next, for the actual preprocessing step, we
              implemented standardization across the entirety of the remaining
              data. Using sklearn’s StandardScaler(), train_test_split(), and
              fit_transform() methods, we first split the data into 85% training
              and 15% test. We then split that 20% of that training data into
              testing and the rest into training. Lastly, we fit the
              transformation onto each set, and got our standardized images for
              training, validation, and testing.
            </Typography>
            <Typography typography="h6">
              Machine Learning Algorithm Implemented
            </Typography>
            <ul>
              <li>Supervised Learning: Convolutional Neural Network</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Results and Discussion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6">Results/Data Visualization</Typography>
            <ul>
              <li>
                Image to Classification Results
                <ul>
                  <li class="bold">CONFUSION MATRIX</li>
                  <li>F1 Score</li>
                </ul>
              </li>
              <li>MathPlotLib Graph Plots</li>
            </ul>
            <Typography typography="h6">
              Analysis of Convolutional Neural Network
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Next Steps</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We plan on testing out our next model implementation, and also
              utilize a new preprocessing method as well.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ m: "12px 0", display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => router.push("/docs/Midterm_Checkpoint.pdf")}
          >
            Link to Proposal PDF
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
