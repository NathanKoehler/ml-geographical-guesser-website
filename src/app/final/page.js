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
  TablePagination,
  TableFooter,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "katex/dist/katex.min.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  precisionScoreChartRows,
  precisionScoreChartConclusion,
  precisionScoreChartTwoRows,
  precisionScoreChartTwoConclusion,
  precisionScoreChartThreeRows,
  precisionScoreChartThreeConclusion,
  memberContributions,
  memberMidtermContributions,
  memberFinalContributions,
} from "./constants.js";
import { InlineMath } from "react-katex";

export default function FinalPage() {
  const router = useRouter();

  const [introExpanded, setIntroExpanded] = useState(true);
  const [problemExpanded, setProblemExpanded] = useState(true);

  const [tableOnePage, setTableOnePage] = useState(0);
  const [rowsPerTableOnePage, setRowsPerTableOnePage] = useState(5);

  const [tableTwoPage, setTableTwoPage] = useState(0);
  const [rowsPerTableTwoPage, setRowsPerTableTwoPage] = useState(5);

  const [tableThreePage, setTableThreePage] = useState(0);
  const [rowsPerTableThreePage, setRowsPerTableThreePage] = useState(5);

  useEffect(() => {
    setIntroExpanded(false);
    setProblemExpanded(false);
  }, []);

  const handleChangePage = (event, pageNum, newPage) => {
    switch (pageNum) {
      case 0:
        setTableOnePage(newPage);
        break;
      case 1:
        setTableTwoPage(newPage);
        break;
      case 2:
        setTableThreePage(newPage);
        break;
      default:
        break;
    }
  };

  const handleChangeRowsPerPage = (event, pageNum) => {
    switch (pageNum) {
      case 0:
        setRowsPerTableOnePage(event.target.value);
        setTableOnePage(0);
        break;
      case 1:
        setRowsPerTableTwoPage(event.target.value);
        setTableTwoPage(0);
        break;
      case 2:
        setRowsPerTableThreePage(event.target.value);
        setTableThreePage(0);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{ p: "24px 0", display: "flex", width: "100%", alignItems: "center" }}
    >
      <Container>
        <Typography typography="h3" align="center" sx={{ mb: 3 }}>
          Final Checkpoint
        </Typography>
        <Accordion
          defaultExpanded
          expanded={introExpanded}
          onChange={(_, ex) => setIntroExpanded(ex)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Intro/Background&nbsp;
            <span style={{ color: "lightblue" }}>(Same as Proposal)</span>
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
            Problem Definition and Motivation&nbsp;
            <span style={{ color: "lightblue" }}>(Same as Proposal)</span>
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
              Data Cleaning
            </Typography>
            &emsp;&emsp;Before our preprocessing step, we decided to first clean
            the dataset deleting non-uniform resolution images, and then deleted
            folders (classes) that had less than 100 images, as we believed it
            would be hard to classify images of those classes because of the
            small amount of data given. Lastly, due to the large dimensionality
            of the dataset, we decided to resize every remaining image into ⅓ of
            its original size. The original image dimensionality was 1536 x 662,
            but after resizing, the dimensionality became 512 x 220. Next, for
            the actual preprocessing step, we implemented standardization across
            the entirety of the remaining data. Due to issues with the memory
            when creating the datasets, we decided to utilize Tensorflow
            Datasets, which helped with memory as it doesn’t load the entirety
            of the dataset in the variable at once.
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Detailed Steps:
            </Typography>
            <ol>
              <li>Manually reviewed all folders of original dataset A.</li>
              <li>
                Removed classification folders that had fewer than 100 images to
                create new dataset B.
              </li>
              <li>
                Used a Python resize script to scale each image in dataset B to
                ⅓ of its original size, changing from 1536 x 662 to 512 x 220.
              </li>
              <li>
                Converted the new dataset B into dataset C using a script for
                Tensorflow dataset format.
              </li>
              <ol>
                <li>Tensorflow dataset type</li>
                <li>Contains only folders with 100+ images</li>
                <li>Each image in dataset C resized to 512 x 220</li>
              </ol>
            </ol>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Preprocessing/Model #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Preprocessing Method: Image Standardization
            </Typography>
            Image standardization is defined by{" "}
            <InlineMath math="X' = \frac{X - \mu}{\sigma}" />, and this
            preprocessing method will help us reduce the lighting and exposure
            for training. By doing this, it allows us to have uniformity across
            all images and may improve convergence during training. We divided
            the dataset into 70% training, 15% validation, and 15% testing. We
            fit a standard scaling (z-score) layer from Tensorflow Keras to the
            training set and transformed all three sets of data with this fitted
            layer. This resulted in our standardized training, validation, and
            testing datasets, testing datasets.
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Detailed Steps:
            </Typography>
            <ol>
              <li>
                Use sklearn&apos;s <code>train_test_split</code> to split the
                image-label pairs into training and testing datasets.
              </li>
              <li>Split image-labels into 75% training and 25% testing.</li>
              <li>
                Split 20% of the training dataset into a validation dataset.
              </li>
              <li>
                The final dataset split results in:
                <ol>
                  <li>60% training</li>
                  <li>15% validation</li>
                  <li>25% testing</li>
                </ol>
              </li>
            </ol>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Model: Convolutional Neural Network
            </Typography>
            Our first machine learning algorithm that we used was a
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
            also doesn&apos;t have Sigmoid&apos;s vanishing gradient issue.
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.1] Model Steps
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <img
                src="/ml-geographical-guesser-website/images/gallery/steps.png"
                alt="steps"
                width={"auto"}
                height={600}
              />
            </Box>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.2 (A) ] Model Accuracy vs. Training Epoch
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
              [Figure 1.2 (B) ] Model Loss vs. Training Epoch
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
              <Table
                aria-label="simple table"
                size="small"
                sx={{ width: "100%" }}
              >
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
                  {precisionScoreChartRows
                    .slice(
                      tableOnePage * rowsPerTableOnePage,
                      tableOnePage * rowsPerTableOnePage + rowsPerTableOnePage
                    )
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                      <Typography typography="h6">Conclusion</Typography>
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
              <TablePagination
                align="left"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={precisionScoreChartRows.length}
                rowsPerPage={rowsPerTableOnePage}
                page={tableOnePage}
                onPageChange={(e, page) => handleChangePage(e, 0, page)}
                onRowsPerPageChange={(e) => handleChangeRowsPerPage(e, 0)}
              />
            </TableContainer>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 1.5] Images In a Class Diagram
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
            <Typography
              typography="h6"
              sx={{ textAlign: "center", mx: 2, my: 4 }}
            >
              Analysis of Convolutional Neural Network
            </Typography>
            &emsp;&emsp;Overall, the visualizations show and imply that the
            model&apos;s accuracy was very low, and it can be inferred that it
            is most likely linked to the way we cleaned our data and or
            preprocessed it. As previously mentioned, our dataset was also not
            uniform; it shows within the confusion matrix with the lack of
            diagonal and heavy weightage on class 55. Furthermore, the precision
            score chart (Figure 1.5) showed that class 55 had a staggering high
            difference in precision in comparison to the others because it had
            over 12,000 images while most others had around an average of
            200~600 images, which made the model more biased in predicting class
            55.
            <br />
            <br />
            &emsp;&emsp;As for the model itself, the first two visualizations
            indicated that the model was doing well on the data in relation to
            the disproportionate dataset. Figure 1.1 showed that the validation
            and training accuracy were both going up, and both were increasing
            at a relatively same rate and value (disregarding outliers such as
            epoch 22 and 79). This meant that the model was learning, as the
            accuracy kept on improving overall as the number of epochs
            increased.
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
            <br />
            <br />
            &emsp;&emsp;For Figure 1.2, the model loss graph is very similar to
            an average model loss graph. It has a sharp dip at the beginning, in
            which the validation and training loss converges towards a small
            value in the end. Because the loss of the training and validation
            showed convergence, this gave signs that the model was not
            overfitting the data.
            <br />
            <br />
            &emsp;&emsp;As a result, the accuracy and loss graphs showed that
            the model was consistent in handling the data, but the model was
            biased because it was trained on a high number of images within
            class 55. This shows just how important data cleaning and
            preparation is, and if the data itself is not good, it will most
            likely imply that the model training will not do well either.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Preprocessing/Model #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: "center", mx: 2, mb: 4 }}>
              Further Data Cleaning*
            </Typography>
            &emsp;&emsp;Because of the vastly disproportionate amount of images
            from the USA compared to the other countries, we decided to further
            clean the data by lessening the amount of images within the USA
            before putting the dataset into training. Thus, we came up with 2
            options
            <ol>
              <li>Augmenting the smaller classes by transforming them</li>
              <li>Undersampling USA</li>
            </ol>
            <Typography sx={{ textAlign: "center", mx: 2, mb: 4 }}>
              Preprocessing Method: Min-Max Scaling
            </Typography>
            Min-Max scaling is defined by{" "}
            <InlineMath math="\sqrt{X'} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}}" />
            . This preprocessing method will normalize the RGB color pixel range
            of 0-255 to 0-1. Like with image standardization, we hope that this
            method will help us with uniformity, and we would like to see how it
            will affect the training process and results.
            <br />
            Detailed Steps:
            <ol>
              Getting the undersampled and augmented dataset layer, we applied a
              normalization layer that divides the values by 255 to make all of
              the value ranges to be 0 to 1 only. This layer was applied to both
              the training and validation layer. After applying the layers, we
              had our new min-max scaled tensorflow dataset ready to be trained
              for the next model. Resulting Dataset: Min-max scaled images,
              undersampling USA to 300 images
            </ol>
            <Typography sx={{ textAlign: "center", mx: 2, mb: 4 }}>
              Model: Transfer Learning Model
            </Typography>
            &emsp;&emsp;Transfer learning is a technique that utilizes
            previously trained machine learning models’ pretrained weights to
            create another model for a different use. In our case, we used a
            DenseNet121, which was trained on the ImageNet dataset. By removing
            the top of the pretrained model and adding some layers at the end,
            the transfer learning model boasts a quick train time (as the
            pretrained weights are frozen) and a relatively high accuracy. We
            also added some dropout layers in order to reduce overfitting, which
            was a pretty common problem with this dataset.
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 2.0] Steps
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <img
                src="/ml-geographical-guesser-website/images/gallery/steps2_0.png"
                alt="model accuracy during training"
                width={"auto"}
                height={600}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Model #2 Results and Discussion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 2.1] Model Accuracy Over Epochs
            </Typography>
            <img
              src="/ml-geographical-guesser-website/images/gallery/fig2_1.png"
              alt="model loss during training"
              width={"100%"}
              height={"auto"}
            />
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 2.2] Model Loss Over Epochs
            </Typography>
            <img
              src="/ml-geographical-guesser-website/images/gallery/fig2_2.png"
              alt="confusion matrix"
              width={"100%"}
              height={"auto"}
            />
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 2.3] Precision Score Chart
            </Typography>
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size="small"
                sx={{ width: "100%" }}
              >
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
                  {precisionScoreChartTwoRows
                    .slice(
                      tableTwoPage * rowsPerTableTwoPage,
                      tableTwoPage * rowsPerTableTwoPage + rowsPerTableTwoPage
                    )
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                      <Typography typography="h6">Conclusion</Typography>
                    </TableCell>
                  </TableRow>
                  {precisionScoreChartTwoConclusion.map((row) => (
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
              <TablePagination
                align="left"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={precisionScoreChartTwoRows.length}
                rowsPerPage={rowsPerTableTwoPage}
                page={tableTwoPage}
                onPageChange={(e, page) => handleChangePage(e, 1, page)}
                onRowsPerPageChange={(e) => handleChangeRowsPerPage(e, 1)}
              />
            </TableContainer>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Analysis of Transfer Learning Model
            </Typography>
            &emsp;&emsp;Firstly, compared to CNN’s confusion matrix,
            DenseNet121’s transfer learning model suggests that it has a higher
            chance of guessing correctly, albeit still only vaguely resembling a
            diagonal matrix. However, because the guesses are spread out, it
            implies that there is less bias within the model.
            <br />
            <br />
            &emsp;&emsp;Taking a further look at the first two loss/accuracy
            plots, we can see that there is also a significant difference in
            trends compared to CNN. While both loss and accuracy seemed to
            converge after a few epochs within CNN, there seems to be a plateau
            in both loss and accuracy for our current transfer learning model
            (especially validation loss), which may suggest that the model could
            be overfitting its data and will have trouble predicting new data.
            <br />
            <br />
            &emsp;&emsp;As mentioned before, transfer learning utilizes
            pretrained weights to train on a different use case. Since
            DenseNet121 was trained on the ImageNet dataset, which is an image
            dataset,we think it performed slightly better than a CNN (less
            complex than a DenseNet). The extreme dip in accuracy compared to
            CNN is most likely due to CNN’s high bias towards guessing USA
            without data cleaning (as there were a lot more USA’s in the testing
            set for the CNN than for the transfer learning model), which may
            have inflated the model’s accuracy.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Preprocessing/Model #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Preprocessing Method: Log Function Scaling
            </Typography>
            &emsp;&emsp;For our last machine learning algorithm, we decided to
            use K-Nearest Neighbors because it vastly differentiated from the
            other two models. While both CNN and Transfer Learning Models
            require iteration, KNN differs from the two because it does not
            utilize iteration. Instead, it rearranges the dataset to points that
            are similar to each other. We chose this model because KNN does well
            with general classification, which is what we are trying to do with
            images. Since SKLearn’s KNN model does not take in Tensorflow
            Datasets, we also had to convert the tensorflow dataset into numpy
            arrays. Before doing so, we applied the image preprocessing steps
            mentioned above and then fit the data into the SKLearn’s KNN model
            to be saved into a pickle file. Then, using a testing set, we called
            the model to make predictions, and the following confusion matrix
            was the result of the predictions:
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 3.1] KNN Confusion Matrix
            </Typography>
            <img
              src="/ml-geographical-guesser-website/images/gallery/fig3_1.png"
              alt="confusion matrix"
              width={"100%"}
              height={"auto"}
            />
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              [Figure 3.1] Precision Score Chart
            </Typography>
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size="small"
                sx={{ width: "100%" }}
              >
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
                  {precisionScoreChartThreeRows
                    .slice(
                      tableThreePage * rowsPerTableThreePage,
                      tableThreePage * rowsPerTableThreePage +
                        rowsPerTableThreePage
                    )
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                      <Typography typography="h6">Conclusion</Typography>
                    </TableCell>
                  </TableRow>
                  {precisionScoreChartThreeConclusion.map((row) => (
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
              <TablePagination
                align="left"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={precisionScoreChartThreeRows.length}
                rowsPerPage={rowsPerTableThreePage}
                page={tableThreePage}
                onPageChange={(e, page) => handleChangePage(e, 2, page)}
                onRowsPerPageChange={(e) => handleChangeRowsPerPage(e, 2)}
              />
            </TableContainer>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Analysis of K-Nearest Neighbors
            </Typography>
            &emsp;&emsp;Overall, KNN was probably the least effective training
            model to fit for this dataset because of the high dimensionality of
            the dataset. Each image consists of 1536 x 662 x 3 data points, and
            we had over 35,000 images combined, even after undersampling the
            USA. With the other models, we were able to utilize tensorflow
            datasets, which made memory allocation significantly easier. In
            addition, because KNN forced the dataset to be numpy arrays,
            unpacking them took a significant amount of memory as well and time
            as well. As a result, we had to further resize the images to 56 x
            384.
            <br />
            <br />
            &emsp;&emsp;KNN is typically considered good for general
            classifications, but due to the sheer amount of data points, it made
            the model not only hard to run, but also harder for the model to
            correctly classify labels because it showed a significant decrease
            in accuracy despite better data cleaning. This is shown through our
            confusion matrix, as it mirrors CNN in the way that it tends to
            guess towards only 1-2 specific labels.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Conclusion
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Overall Analysis and Comparison of Algorithms
            </Typography>
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size="small"
                sx={{ width: "100%" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">
                      Image Standardization + CNN
                    </TableCell>
                    <TableCell align="right">
                      Min-Max + Transfer Learning
                    </TableCell>
                    <TableCell align="right">Log Scaling + KNN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Test Accuracy</TableCell>
                    <TableCell align="right">24.62%*</TableCell>
                    <TableCell align="right">5.36%</TableCell>
                    <TableCell align="right">2.98%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Box sx={{ m: 2 }}>
                * Test accuracy high for CNN potentially due to very unbalanced
                testing dataset
              </Box>
            </TableContainer>
            <br />
            &emsp;&emsp;Overall, we can see that the KNN performed the worst,
            and the Convolutional Neural Network. One main reason for this could
            be the sheer number of features of the dataset. Image
            classification, especially with a problem as difficult as ours,
            requires a complex model, and as the transfer learning model was the
            most complex model, it seems that it was the most effective in
            solving the problem.
            <br />
            <br />
            &emsp;&emsp;Taking a look at the confusion matrices as well,
            transfer learning seemed to also resemble an identity matrix the
            most, which suggests that it was more likely to conduct correct
            guesses compared to CNN (which often kept on guessing USA), and KNN
            (which often kept on guessing Argentina and Australia). Lastly, as
            previously mentioned, although CNN had the highest accuracy, it was
            heavily biased without undersampling the USA class. However, the low
            accuracy of the models show just how important dataset cleaning and
            augmenting can be.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Next Steps</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Dataset Modifications
            </Typography>
            <ul>
              <li>
                Granted that our dataset was actually quite small, we could
                expand more on the dataset by adding more images to the set.
                This can be either done manually through getting images from
                google street view, or creating a script to run GeoGuesser to
                get new images and data from there directly.
              </li>
              <li>
                Testing out each preprocessing method on the same model to see
                which one does best to fine tune the preprocessing step.
              </li>
              <li>Make overall data within each folder to be uniform</li>
            </ul>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Model Selections/Changes
            </Typography>
            <ul>
              <li>
                Given that we now know how to manipulate numpy arrays and
                tensorflow datasets better, we would like to explore using other
                models that run tensorflow datasets more easily.
              </li>
              <li>
                Adjusting certain layers to models to see which combinations
                result in better accuracies
              </li>
            </ul>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Final Thoughts
            </Typography>
            &emsp;&emsp;Our project really goes to show the importance of data
            itself. While different preprocessing methods and machine
            learning/deep learning methods did make a difference, the overall
            performances of these models were subpar. This was mostly due to the
            dataset being unbalanced, as well as having not that many data
            points. Of course, it is more difficult to have a lot of data points
            with image data as compared to other datasets such as numerical
            data, but the lack of balanced data did cause a poor performance
            from our models.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            GanttChart
          </AccordionSummary>
          <AccordionDetails>
            <Link
              href="https://docs.google.com/spreadsheets/d/19_VOqvxJFMCFrAmEJ20LphN3s9Z-DeSa0s5TAErNw8Q/edit#gid=396324071"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box sx={{ m: 2 }}>
                <Button variant="outlined" fullWidth>
                  You can view our Gantt Chart here.
                </Button>
              </Box>
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Team Contributions
          </AccordionSummary>
          <AccordionDetails>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Project Proposal Contributions Table
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Group Member</TableCell>
                  <TableCell>Contributions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memberContributions.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.member}</TableCell>
                    <TableCell>{row.contributions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Project Midterm Contributions Table
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Group Member</TableCell>
                  <TableCell>Contributions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memberMidtermContributions.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.member}</TableCell>
                    <TableCell>{row.contributions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography typography="h6" sx={{ textAlign: "center", my: 2 }}>
              Project Final Contributions Table
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Group Member</TableCell>
                  <TableCell>Contributions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memberFinalContributions.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.member}</TableCell>
                    <TableCell>{row.contributions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>References&nbsp;<span style={{ color: "lightblue" }}> (Listed in Proposal)</span></AccordionSummary>
            <AccordionDetails>
              [1] R. K., &quot;Geolocation - Geoguessr images (50k),&quot;
              Kaggle,{" "}
              <Link
                href="https://www.kaggle.com/datasets/ubitquitin/geolocation-geoguessr-images-50k"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.kaggle.com/datasets/ubitquitin/geolocation-geoguessr-images-50k
              </Link>
              , (accessed Feb. 20, 2024). <br />
              <br />
              [2] A. Bhandari, &quot;Feature scaling: Engineering,
              Normalization, and standardization (updated 2024),&quot; Analytics
              Vidhya,{" "}
              <Link
                href="https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/
              </Link>
              , (accessed Feb. 20, 2024). <br />
              <br />
              [3] Kim, H.E., Cosa-Linan, A., Santhanam, N. et al. Transfer
              learning for medical image classification: a literature review.
              BMC Med Imaging 22, 69 (2022).{" "}
              <Link
                href="https://doi.org/10.1186/s12880-022-00793-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1186/s12880-022-00793-7
              </Link>{" "}
              <br />
              <br />
              [4] &quot;Normalization | Machine learning | Google for
              developers,&quot; Google,{" "}
              <Link
                href="https://developers.google.com/machine-learning/data-prep/transform/normalization"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/machine-learning/data-prep/transform/normalization
              </Link>
              , (accessed Feb. 20, 2024). <br />
              <br />
              [5] Weyand, T., Kostrikov, I., Philbin, J. (2016). PlaNet - Photo
              Geolocation with Convolutional Neural Networks. In: Leibe, B.,
              Matas, J., Sebe, N., Welling, M. (eds) Computer Vision – ECCV
              2016. ECCV 2016. Lecture Notes in Computer Science(), vol 9912.
              Springer, Cham.{" "}
              <Link
                href="https://doi.org/10.1007/978-3-319-46484-8_3"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1007/978-3-319-46484-8_3
              </Link>
            </AccordionDetails>
          </Accordion>
        <Box sx={{ m: "12px 0", display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => router.push("/docs/Final_Checkpoint.pdf")}
          >
            Link to Final Checkpoint PDF
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
