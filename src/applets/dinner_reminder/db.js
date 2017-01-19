/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import Datastore from 'nedb';
import path from 'path';

const db = new Datastore({ filename:  path.resolve(__dirname, './config.db'), autoload: true});

export default db;
