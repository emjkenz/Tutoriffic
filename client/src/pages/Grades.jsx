import HappyBallons from '../Assets/happyBalloons.jpg'

const StyledGrades = styled.div`
    height: 350px;
    width: 350px;
    background-image: url(${HappyBallons});
    background-size: contain;
    background-repeat: no-repeat;
`

const Grades = () => {
    return (
        <div>

            <StyledGrades className="image">
                This div contains the grades page background image.
            </StyledGrades>
        </div>
    );
}

export default Grades;