'use client'

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
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        <Typography typography="h1" align="center">
          Proposal
        </Typography>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Intro/Background</AccordionSummary>
            <AccordionDetails>
              <span>
                Geoguesser is a game in which players are randomly placed
                somewhere in Google Street View and need to guess what their
                exact location is.
                <br />
                <br />
                Previous literature [3][5] discusses using techniques like CNNs
                and transfer learning to analyze other image datasets to
                identify pneumonia in x-rays and find skin lesions and skin
                cancer from pictures. These papers have used these techniques to
                identify features that can help models classify an image.
                However, one of the shortcomings previous literature emphasizes
                is a lack of sufficient data in training models.
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
                world, with every image belonging to 1 of 150+ countries. The
                data itself is not uniform as there are more images within
                certain countries compared to others, but we plan to combine
                datasets and prune folders with insufficient data.
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
              specific parts of the world, and correctly identifying which
              country the street view image is from.
              <br />
              <br />
              This brings us to our problem - there may be certain circumstances
              in which it would be helpful to determine a relative location
              given a set of images, such as crime investigations. Thus, our
              motivation towards a potential solution to this is to start by
              using the Geoguessr dataset found through Kaggle, and train the
              dataset to determine which country it is in.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Methods</AccordionSummary>
            <AccordionDetails>
              <span>
                The first preprocessing method we will employ is standardization
                [2], which is defined by{" "}
                <InlineMath math="X' = \frac{X - \mu}{\sigma}" /> and will help
                reduce differences in lighting and exposure. The second
                preprocessing method will be min-max scaling [2], which
                normalizes the 0-255 pixel range to 0-1 for easier model
                calculation, and is defined by{" "}
                <InlineMath math="\sqrt{X'} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}}" />
                . Lastly, the third preprocessing method will be log scaling,
                which essentially applies the log function to every data point
                [4]. Other than scaling the image array values, we will also
                clean our data by omitting countries (classes) with less than
                100 images to prevent overfitting of some classes.
                <br />
                <br />
                As it is an image classification problem, our first model will
                be a CNN – a convolutional neural network. This will be a quite
                simple model, consisting of layers such as conv2D, pooling,
                dropout, and fully connected layers. The second model will be a
                transfer learning model, fine tuning an already trained model
                (e.g. DenseNet121). The third model will be a KNN (K-Nearest
                Neighbors) model that we learned in class.
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              (Potential) Results and Discussion
            </AccordionSummary>
            <AccordionDetails>
              An expected result of this project would be providing the program
              a picture(s) of a specific place, and it will guess what country
              the image(s) are from. Although we understand that the program
              will make mistakes on labeling the country, our hope is that it
              will be more informed and more accurate compared to the average
              uninformed person.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>References</AccordionSummary>
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
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>GanttChart</AccordionSummary>
            <AccordionDetails>
              <Link
                href="https://docs.google.com/spreadsheets/d/19_VOqvxJFMCFrAmEJ20LphN3s9Z-DeSa0s5TAErNw8Q/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box sx={{ m: 2 }}>
                  <Button fullWidth>You can view our Gantt Chart here.</Button>
                </Box>
              </Link>
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
             onClick={() => router.push("/docs/Machine_Learning_Proposal.pdf")}
          >
            Link to Proposal PDF
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
