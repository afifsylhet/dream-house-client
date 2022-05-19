import Calculotor from '../shared/pages/Calculotor/Calculotor';
import SingleProductDis from '../shared/pages/SingleProductDis/SingleProductDis';
import SingleProductHeading from '../shared/pages/SingleProductHeading/SingleProductHeading';

const ProductView = () => {
    return (
        <div>
            <SingleProductHeading></SingleProductHeading>
            <SingleProductDis></SingleProductDis>
            <Calculotor></Calculotor>
        </div>
    );
};

export default ProductView;