import { Router } from "express";
import {home, dogs} from "../controllers/pagesControllers";
import * as PagesController from "../controllers/pagesControllers";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get('/', home);
router.get('/dogs', dogs);
router.get('/cats', PagesController.cats);
router.get('/fishes', PagesController.fishes);

router.get('/search', SearchController.search);

export default router;