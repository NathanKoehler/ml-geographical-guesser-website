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
  TableContainer,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "katex/dist/katex.min.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const rows = [
  { member: "Aaditya Anugu", contributions: "Intro, Background, & Gantt Chart" },
  {
    member: "Justin Kang",
    contributions: "Methods, Results, & Discussion",
  },
  {
    member: "Nathan Koehler",
    contributions: "Methods, Github Pages Website",
  },
  {
    member: "Patrick Soo",
    contributions:
      "Methods, Results, & Discussion",
  },
  {
    member: "Zhixuan Wang",
    contributions: "Methods, Results, & Discussion",
  },
];

const precisionScoreChartRows = [
  {
    id: 0,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 104,
  },
  {
    id: 1,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 256,
  },
  {
    id: 2,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 53,
  },
  {
    id: 3,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 16,
  },
  {
    id: 4,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 33,
  },
  {
    id: 5,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 18,
  },
  {
    id: 6,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 22,
  },
  {
    id: 7,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 348,
  },
  {
    id: 8,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 33,
  },
  {
    id: 9,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 18,
  },
  {
    id: 10,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 208,
  },
  {
    id: 11,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 49,
  },
  {
    id: 12,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 38,
  },
  {
    id: 13,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 20,
  },
  {
    id: 14,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 39,
  },
  {
    id: 15,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 30,
  },
  {
    id: 16,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 158,
  },
  {
    id: 17,
    precision: "0.1122",
    recall: "0.0653",
    f1Score: "0.0825",
    support: 536,
  },
  {
    id: 18,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 105,
  },
  {
    id: 19,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 17,
  },
  {
    id: 20,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 38,
  },
  {
    id: 21,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 26,
  },
  {
    id: 22,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 24,
  },
  {
    id: 23,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 44,
  },
  {
    id: 24,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 44,
  },
  {
    id: 25,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 49,
  },
  {
    id: 26,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 119,
  },
  {
    id: 27,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 576,
  },
  {
    id: 28,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 20,
  },
  {
    id: 29,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 18,
  },
  {
    id: 30,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 21,
  },
  {
    id: 31,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 64,
  },
  {
    id: 32,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 136,
  },
  {
    id: 33,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 87,
  },
  {
    id: 34,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 84,
  },
  {
    id: 35,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 19,
  },
  {
    id: 36,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 102,
  },
  {
    id: 37,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 41,
  },
  {
    id: 38,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 33,
  },
  {
    id: 39,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 130,
  },
  {
    id: 40,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 37,
  },
  {
    id: 41,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 52,
  },
  {
    id: 42,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 265,
  },
  {
    id: 43,
    precision: "0.0185",
    recall: "0.0093",
    f1Score: "0.0124",
    support: 107,
  },
  {
    id: 44,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 17,
  },
  {
    id: 45,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 178,
  },
  {
    id: 46,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 37,
  },
  {
    id: 47,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 162,
  },
  {
    id: 48,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 109,
  },
  {
    id: 49,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 26,
  },
  {
    id: 50,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 83,
  },
  {
    id: 51,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 142,
  },
  {
    id: 52,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 41,
  },
  {
    id: 53,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 18,
  },
  {
    id: 54,
    precision: "0.0000",
    recall: "0.0000",
    f1Score: "0.0000",
    support: 373,
  },
  {
    id: 55,
    precision: "0.2542",
    recall: "0.9667",
    f1Score: "0.4025",
    support: 1803,
  },
];

const precisionScoreChartConclusion = [
  {
    id: "accuracy",
    precision: "",
    recall: "",
    f1Score: "0.2462",
    support: 7226,
  },
  {
    id: "macro avg",
    precision: "0.0069",
    recall: "0.0186",
    f1Score: "0.0089",
    support: 7226,
  },
  {
    id: "weighted avg",
    precision: "0.0720",
    recall: "0.2462",
    f1Score: "0.1067",
    support: 7226,
  },
];

export default function ProposalPage() {
  const router = useRouter();

  const [introExpanded, setIntroExpanded] = useState(true);
  const [problemExpanded, setProblemExpanded] = useState(true);

  useEffect(() => {
    setIntroExpanded(false);
    setProblemExpanded(false);
  }, []);

  return (
    <Box
      sx={{ p: "24px 0", display: "flex", width: "100%", alignItems: "center" }}
    >
      <Container>
        <Typography typography="h3" align="center" sx={{ mb: 3 }}>
          Midterm Checkpoint
        </Typography>
        <Accordion
          defaultExpanded
          expanded={introExpanded}
          onChange={(_, ex) => setIntroExpanded(ex)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Intro/Background&nbsp;<span style={{ color: "lightblue" }}>(Same as Proposal)</span>
          </AccordionSummary>
          <AccordionDetails>
            <span>
              &emsp;&emsp;Geoguesser is a game in which players are randomly
              placed somewhere in Google Street View and need to guess what
              their exact location is.
              <br />
              <br />
              &emsp;&emsp;Previous literature [3][5] discusses using techniques
              like CNNs and transfer learning to analyze other image datasets to
              identify pneumonia in x-rays and find skin lesions and skin cancer
              from pictures. These papers have used these techniques to identify
              features that can help models classify an image. However, one of
              the shortcomings previous literature emphasizes is a lack of
              sufficient data in training models.
              <br />
              <br />
              &emsp;&emsp;The following dataset,{" "}
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
        <Accordion
          defaultExpanded
          expanded={problemExpanded}
          onChange={(_, ex) => setProblemExpanded(ex)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Problem Definition and Motivation&nbsp;<span style={{ color: "lightblue" }}>(Same as Proposal)</span>
          </AccordionSummary>
          <AccordionDetails>
            &emsp;&emsp;We are interested in seeing if we can train a model to
            accurately perform this task of identifying key objects that belong
            to only specific parts of the world, and correctly identifying which
            country the street view image is from.
            <br />
            <br />
            &emsp;&emsp;This brings us to our problem - there may be certain
            circumstances in which it would be helpful to determine a relative
            location given a set of images, such as crime investigations. Thus,
            our motivation towards a potential solution to this is to start by
            using the Geoguessr dataset found through Kaggle, and train the
            dataset to determine which country it is in.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Methods</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Data Preprocessing
            </Typography>
            &emsp;&emsp;Before our preprocessing step, we decided to first clean
            the dataset deleting non-uniform resolution images, and then deleted
            folders (classes) that had less than 100 images, as we believed it
            would be hard to classify images of those classes because of the
            small amount of data given. Lastly, due to the large dimensionality
            of the dataset, we decided to resize every remaining image into ⅓ of
            its original size. Next, for the actual preprocessing step, we
            implemented standardization across the entirety of the remaining
            data. Due to issues with the memory when creating the datasets, we
            decided to utilize Tensorflow Datasets, which helped with memory as
            it doesn’t load the entirety of the dataset in the variable at once.
            We divided the dataset into 70% training, 15% validation, and 15%
            testing. We fit a standard scaling (z-score) layer from Tensorflow
            Keras to the training set and transformed all three sets of data
            with this fitted layer. This resulted in our standardized training,
            validation, and testing datasets.
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Machine Learning Algorithm/Model Implemented
            </Typography>
            &emsp;&emsp;For our ML Algorithm for this checkpoint, we used a
            Convolutional Neural Network, which was a type of supervised
            learning. We chose to do CNN because of its efficacy with handling
            image data. Widely known image classification models such as the
            ResNet or DenseNet also employ convolution layers. Conv2D layers
            take filters to extract the information and essentially summarize
            them into a pixel. MaxPooling layers have been known to perform well
            with Conv2D layers, and they also reduce the dimensions of the
            image. The model architecture is shown in the diagram below. In
            order to prevent overfitting, we used L1 regularizer and Dropout
            layers. The final layer has a softmax function that allows the image
            classification. As for the activation functions of the Conv2D
            layers, we used ReLU, as it is faster than Sigmoid to compute and
            also doesn’t have Sigmoid’s vanishing gradient issue.
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <img
                src="/ml-geographical-guesser-website/images/gallery/steps.png"
                alt="steps"
                width={"auto"}
                height={600}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Results and Discussion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.2] Model Accuracy vs. Training Epoch
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <img
                src="/ml-geographical-guesser-website/images/gallery/modelaccuracyduringtraining.png"
                alt="model accuracy during training"
                width={"100%"}
                height={"auto"}
              />
            </Box>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.2] Model Loss vs. Training Epoch
            </Typography>
            <img
              src="/ml-geographical-guesser-website/images/gallery/modellossduringtraining.png"
              alt="model loss during training"
              width={"100%"}
              height={"auto"}
            />
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.3] Confusion Matrix
            </Typography>
            <img
              src="/ml-geographical-guesser-website/images/gallery/confusion.png"
              alt="confusion matrix"
              width={"100%"}
              height={"auto"}
            />
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.4] Precision Score Chart
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Precision</TableCell>
                    <TableCell align="right">Recall</TableCell>
                    <TableCell align="right">F1-Score</TableCell>
                    <TableCell align="right">Support</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {precisionScoreChartRows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.precision}</TableCell>
                      <TableCell align="right">{row.recall}</TableCell>
                      <TableCell align="right">{row.f1Score}</TableCell>
                      <TableCell align="right">{row.support}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ border: "none" }}>
                    <Typography typography="h6">
                      Conclusion
                    </Typography>
                    </TableCell>
                  </TableRow>
                  {precisionScoreChartConclusion.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.precision}</TableCell>
                      <TableCell align="right">{row.recall}</TableCell>
                      <TableCell align="right">{row.f1Score}</TableCell>
                      <TableCell align="right">{row.support}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.5] # Images In a Class
            </Typography>
            <img
              src="/ml-geographical-guesser-website/images/gallery/imageswithinaclass.png"
              alt="Number images within a class"
              width={"100%"}
              height={"auto"}
            />
            <Typography sx={{ textAlign: "center", mx: 2, mb: 4 }}>
              (Note: This graph goes from 1 to 56 instead of 0 to 55)
            </Typography>
            &emsp;&emsp;Our confusion matrix shows very little relationship in
            terms of having a visible diagonal. This possibly implies that the
            models were not accurate in predicting each class, and were heavily
            predicting class 55/56 (United States), which was most likely due to
            the disproportionate amount of data it had compared to the other
            classes.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Analysis of Convolutional Neural Network</Typography>
          </AccordionSummary>
          <AccordionDetails>
            &emsp;&emsp;Overall, the visualizations show and imply that the
            model&apos;s accuracy was very low, and it can be inferred that it is
            most likely linked to the way we cleaned our data and or
            preprocessed it. As previously mentioned, our dataset was also not
            uniform, as it shows within the confusion matrix. Class 55 had a
            staggering high difference in precision in comparison to the others,
            as it had over 12,000 images while most others had around an average
            of 200~600 images, which made the model more biased in predicting
            class 55.
            <br />
            <br />
            &emsp;&emsp;As for the model itself, the first two visualizations
            indicated that the model was doing well on the data in relation to
            the disproportionate dataset. Figure 1.1 showed that the validation
            and training accuracy were both going up, and both at the relatively
            same rate and value (disregarding outliers such as epoch 22 and 79).
            This meant that the model was learning, as the accuracy kept on
            improving overall as the number of epochs increased.
            <br />
            <br />
            &emsp;&emsp;For Figure 1.2, the model loss graph is very similar to
            the average model loss graph, as it has a sharp dip at the
            beginning, in which the validation and training loss converges
            towards a small value in the end. This showed that the loss of the
            training and validation were converging, giving signs that the model
            was not overfitting the data. As a result, the accuracy and loss
            graphs showed that the model was consistent in handling the data,
            but was bottlenecked/biased because of the high number of images
            within class 55. This shows just how important data cleaning and
            preparation is, and if the data itself is not good, it will most
            likely imply that the model training will not do well either.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Next Steps</Typography>
          </AccordionSummary>
          <AccordionDetails>
            &emsp;&emsp;As for next steps, we plan on focusing more on the how we should
            handle and prepare the data before training the model, and also
            utilize new preprocessing methods as well. As previously mentioned,
            our data was not uniform; this proved to have a negative effect on
            the model, as it would be able to classify labels that had much more
            images correctly than ones without. We thus plan on making the data
            more uniform by either providing more images to the dataset and or
            trimming more images from folders that had too many. We could also
            potentially utilize the class weights feature in Tensorflow.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Contribution Table</AccordionSummary>
            <AccordionDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Group Member</TableCell>
                    <TableCell>Contributions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.member}</TableCell>
                      <TableCell>{row.contributions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>
        <Box sx={{ m: "12px 0", display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => router.push("/docs/Midterm_Checkpoint.pdf")}
          >
            Link to Midterm Checkpoint PDF
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
