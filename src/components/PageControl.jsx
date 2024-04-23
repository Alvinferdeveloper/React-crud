import styles from '../styles/index.module.css';
import Pagination from '@mui/material/Pagination';

export function PageControl({ nextPage, pages, currentPage}){
    return (
        <div className={styles.page__control}>
             <Pagination count={pages} color="secondary"  onChange={nextPage} page={currentPage}
              />
        </div>
       
    )
}