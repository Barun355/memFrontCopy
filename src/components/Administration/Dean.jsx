import React from "react";
import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBTypography,
} from "mdb-react-ui-kit";
// import 
export default function Dean() {
	return (
		<div className="gradient-custom-2" style={{ backgroundColor: "#eceada" }}>
			<MDBContainer className="py-5 h-100">
				<MDBRow className="justify-content-center align-items-center h-100">
					<MDBCol lg="9" xl="7">
						<MDBCard>
							<div
								className="rounded-top text-white d-flex flex-row"
								style={{ backgroundColor: "#000", height: "200px" }}
							>
								<div
									className="ms-4 mt-5 d-flex flex-column"
									style={{ width: "350px" }}
								>
									<MDBCardImage
										src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756285/dean_jbvwrf.jpg"
										alt="Generic placeholder image"
										className="mt-4 mb-2 img-thumbnail"
										fluid
										style={{
											width: "250px",
											height: "230px",
											zIndex: "1",
										}}
									/>
								</div>
								<div className="ms-3" style={{ marginTop: "130px" }}>
									<MDBTypography tag="h5">Prof.RAJESH C.JAMPALA</MDBTypography>
									<MDBCardText>Vijayawada</MDBCardText>
								</div>
							</div>
							<div
								className="p-4 text-black"
								style={{ backgroundColor: "#f8f9fa" }}
							>
								<div className="d-flex justify-content-end text-center py-1">
									<div>
										<MDBCardText className="mb-1 h5">0</MDBCardText>
										<MDBCardText className="small text-muted mb-0">
											Photos
										</MDBCardText>
									</div>
									<div className="px-3">
										<MDBCardText className="mb-1 h5">0</MDBCardText>
										<MDBCardText className="small text-muted mb-0">
											Followers
										</MDBCardText>
									</div>
								</div>
							</div>
							<MDBCardBody className="text-black p-4">
								<div className="mb-5">
									<p className="lead fw-normal mb-1">About</p>
									<div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
										<MDBCardText className="font-italic mb-1">
											{" "}
											MBA, MPhil, MFT, PhD, PGDCA
										</MDBCardText>
										<MDBCardText className="font-italic mb-1">
											dean@pbsiddhartha.ac.in, dean.pbsiddhartha@gmail.com
										</MDBCardText>
										<MDBCardText className="font-italic mb-0">
											Present Roles: Dean (Academics & Administration),
											P.B.Siddhartha College of Arts & Science Professor & Head,
											Department of Commerce and Business Administration,
											P.B.Siddhartha College of Arts & Science Teaching
											Experience: Has over Twenty Nine years of experience in
											teaching Post-Graduate students of Commerce & Business
											Administration. Research Guidance: Guiding Research
											Scholars at Post-Graduate Level for obtaining degrees of
											MPhil, and PhD currently 7 Research Scholars pursuing
											their research in the areas such as Industrial Relations,
											Foreign Investment Flows, Capital Markets etc., Eleven
											Research Scholars were awarded with MPhil Degrees and Six
											Research Scholars were awarded with PhD
										</MDBCardText>
									</div>
								</div>
								<div className="d-flex justify-content-between align-items-center mb-4">
									<MDBCardText className="lead fw-normal mb-0">
										Recent photos
									</MDBCardText>
									<MDBCardText className="mb-0">
										<a href="#!" className="text-muted">
											0
										</a>
									</MDBCardText>
								</div>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}
