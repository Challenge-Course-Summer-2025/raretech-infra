#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkErcStack } from '../lib/erc-stack';

const app = new cdk.App();
new CdkErcStack(app, 'CdkErcStack');